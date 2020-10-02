const express = require("express");
const router = express.Router();

const upload = require("../../middleware/upload");

const Post = require("../../models/Post");

// @route   GET api/posts
// @desc    Get all posts with images
// @access  Public
router.get("/", async (req, res) => {
    try {
        const { page = 1, limit = 9 } = req.query;

        // execute query with page and limit values
        const posts = await Post.find()
            .sort({ date: -1 })
            .skip((page - 1) * limit)
            .limit(limit * 1)
            .exec();

        // get total number of posts
        const count = await Post.countDocuments();

        // return response with posts, total pages and current page
        res.json({
            posts,
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
router.post("/", upload.array("images", 20), async (req, res, next) => {
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
    const dupe = await Post.findOne({ title });

    if (dupe) {
        return res.status(400).json({ msg: "Title already exists" });
    } else {
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
    }
});

router.delete("/:postId", (req, res) => {
    Post.findById(req.params.postId).then((post) => {
        post.remove()
            .then(() => res.json({ deleteSuccess: true }))
            .catch((error) => res.status(400).json({ deleteSuccess: false, error }));
    });
});

module.exports = router;