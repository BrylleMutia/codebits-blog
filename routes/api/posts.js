const express = require("express");
const router = express.Router();

const upload = require("../../middleware/upload");

const { Post } = require("../../models/schemaIndex");

// @route   GET api/posts
// @desc    Get all posts with images
// @access  Public
router.get("/", async (req, res) => {
    try {
        const { page = 1, limit = 9, sortbyrating = 0 } = req.query;

        // configure sorting options
        // sort by date by default
        // if rating = true, sort by rating
        // order = -1 (descending) OR 1 (ascending)
        const sortInfo = {};
        if (sortbyrating == 1) sortInfo["rating"] = -1;
        sortInfo["date"] = -1;

        // execute query with page and limit values
        const posts = await Post.find()
            .sort(sortInfo)
            .skip((page - 1) * limit)
            .limit(limit * 1)
            .exec();

        // filter posts to only return the first image for thumbnail
        // faster fetch of posts
        const newPosts = posts.map((post) => {
            post.images = post.images[0];
            return post;
        });

        // get total number of posts
        const count = await Post.countDocuments();

        // return response with posts, total pages and current page
        res.json({
            posts: newPosts,
            totalPages: Math.ceil(count / limit),
            currentPage: Number(page),
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

// @route   POST api/posts
// @desc    Add new post with images
// @access  Public
router.post("/", upload.array("images", 20), (req, res, next) => {
    // check if files are existent
    if (!req.files.length) {
        return res.status(400).json({ msg: "Empty or unsuccessful file upload" });
    }

    // get path of all uploaded images then save on db
    imagesPath = req.files.map((file) => file.path);

    const { title, header, rating, category } = req.body;

    // check if rating field is given
    if (!rating) return res.status(400).json({ msg: "Please provide initial rating" });

    // check if title is unique
    Post.findOne({ title }).then((post) => {
        if (post) return res.status(400).json({ msg: "Title already exists" });

        const newPost = new Post({
            title,
            header,
            rating,
            category,
            images: imagesPath,
        });

        newPost
            .save()
            .then((post) => res.json(post))
            .catch((err) => res.status(400).json(err));
    });
});

// @route   GET /api/posts/:id
// @desc    Get details of a specific post
// @access  Public
router.get("/:postId", (req, res) => {
    const { postId } = req.params;

    Post.findById(postId)
        .then((post) => res.json(post))
        .catch((err) => res.status(400).json({ msg: "Can't find requested post", err }));
});


router.delete("/:postId", (req, res) => {
    Post.findById(req.params.postId).then((post) => {
        post.remove()
            .then(() => res.json({ deleteSuccess: true }))
            .catch((error) => res.status(400).json({ deleteSuccess: false, error }));
    });
});


module.exports = router;
