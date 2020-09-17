const express = require("express");
const router = express.Router();

const upload = require('../../middleware/upload');

const Post = require("../../models/Post");

// @route   GET api/posts
// @desc    Get all posts with images
// @access  Public
router.get("/", (req, res) => {
    Post.find()
        .then((posts) => res.json(posts))
        .catch((err) => res.status(400).json(err));
});

// @route   POST api/posts
// @desc    Add new post with images
// @access  Public
router.post("/", upload.array("postImages", 20), (req, res, next) => {
    console.log(req.files);

    if (!req.files) {
        const err = new Error("Unsuccessful file upload");
        return next(err);
    }

    // get path of all uploaded images then save on db
    imagesPath = req.files.map((file) => file.path);

    const { title, header } = req.body;

    const newPost = new Post({
        title,
        header,
        images: imagesPath,
    });

    newPost
        .save()
        .then((post) => res.json(post))
        .catch((err) => res.status(400).json(err));
});

router.delete("/:postId", (req, res) => {
    Post.findById(req.params.postId).then((post) => {
        post.remove()
            .then(() => res.json({ deleteSuccess: true }))
            .catch((error) => res.status(400).json({ deleteSuccess: false, error }));
    });
});

module.exports = router;
