const express = require("express");
const router = express.Router();

const upload = require("../../middleware/upload");

const { Post } = require("../../models/schemaIndex");

// @route   GET api/posts
// @desc    Get all posts with images
// @access  Public
router.get("/", async (req, res) => {
    try {
        const { page = 1, limit = 9, sortbyrating } = req.query;

        // configure sorting options
        // sort by date by default
        // if sortbyrating = 1, sort by rating
        // order = -1 (descending) OR 1 (ascending)
        const sortOptions = () => {
            switch (sortbyrating) {
                case "0":
                    return { date: -1 };
                case "1":
                    return { "ratings.rating": -1 };
                default:
                    return { date: -1 };
            }
        };

        // execute query with page and limit values
        const posts = await Post.find()
            .sort(sortOptions())
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

// @route   GET api/posts/recommended
// @desc    Get 3 random posts from the same category as recommendation
// @access  Public
router.get("/recommended", async (req, res) => {
    const { category, currentPostId } = req.query;

    // find the first 3 posts within the same category with the highest rating
    // exclude the current post in query
    const posts = await Post.find({
        $and: [{ _id: { $ne: currentPostId } }, { category }],
    })
        .limit(3)
        .sort({ "ratings.rating": -1 });

    // filter posts to only return the first image for thumbnail
    // faster fetch of posts
    const newPosts = posts.map((post) => {
        post.images = post.images[0];
        return post;
    });

    res.json(newPosts);
});

// @route   GET api/posts/search
// @desc    Respond with posts that correspond the title search
// @access  Public
router.get("/search", (req, res) => {
    const { keyword } = req.query;

    // find all posts that have the keyword provided in search
    // match title, header and author of the post
    // case non-sensitive
    Post.find({
        $or: [
            {
                title: {
                    $regex: keyword,
                    $options: "i",
                },
            },
            {
                header: {
                    $regex: keyword,
                    $options: "i",
                },
            },
            {
                author: {
                    $regex: keyword,
                    $options: "i",
                },
            },
        ],
    })
        .then((foundPosts) => res.json(foundPosts))
        .catch((err) => res.status(400).json({ msg: "No posts found related to search", err }));
});

// @route   POST api/posts
// @desc    Add new post with images
// @access  Public
router.post("/", upload.array("images", 20), (req, res, next) => {
    const { userId } = req.query;

    // check if files are existent
    if (!req.files.length) {
        return res.status(400).json({ msg: "Empty or unsuccessful file upload" });
    }

    // get path of all uploaded images then save on db
    imagesPath = req.files.map((file) => file.path);

    const { title, header, rating, category, author } = req.body;

    // check if rating field is given
    if (!rating || !title || !header || !category) return res.status(400).json({ msg: "Please fill all input fields" });

    // check if title is unique
    Post.findOne({ title }).then((post) => {
        if (post) return res.status(400).json({ msg: "Title already exists" });

        const newPost = new Post({
            title,
            header,
            author,
            ratings: [{ _id: userId, rating }],
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

// @route   DELETE /api/posts/delete/:postId
// @desc    Delete a post
// @access  Private
router.delete("/delete/:postId", (req, res) => {
    Post.findById(req.params.postId).then((post) => {
        post.remove()
            .then(() => res.json({ deleteSuccess: true }))
            .catch((error) => res.status(400).json({ msg: "Unable to delete post", error }));
    });
});

// @route   PATCH /api/posts/rate/:postId
// @desc    Update rating of a post
// @access  Public
router.patch("/rate/:postId", (req, res) => {
    const { postId } = req.params;
    const { userId, rating } = req.query;

    Post.findById(postId)
        .then((post) => {
            post.ratings.push({ _id: userId, rating });
            post.save()
                .then((newPost) => res.json(newPost))
                .catch(() => res.status(400).json({ msg: "Unable to update rating for post " }));
        })
        .catch(() => res.status(400).json({ msg: "Unable to update rating for post " }));
});

module.exports = router;
