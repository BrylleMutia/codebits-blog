const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const multer = require("multer");

const Post = require("../../models/Post");

// store images using multer
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "uploads");
    },
    filename: (req, file, callback) => {
        callback(null, new Date().toISOString().slice(0, 10) + "-" + file.originalname);
    },
});

// filter files by file types
const fileFilter = (req, file, callback) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        // accept file
        callback(null, true);
    } else {
        // reject file
        callback(new Error("Invalid file format"), false);
    }
};

const upload = multer({
    storage: storage,
    // limit file size by 10 MB
    limits: {
        fileSize: 1024 * 1024 * 10,
    },
    // add file filter
    fileFilter: fileFilter,
});


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
router.post("/", upload.single("contentImage"), (req, res) => {
    console.log(req.file);

    const { title, header } = req.body;

    const newPost = new Post({
        title,
        header,
        contentImage: req.file.filename
        // rating,
        // images: {
        //     data: fs.readFileSync(path.join(__dirname + "/uploads/" + req.file.filename)),
        //     contentType: "image/png",
        // },
    });

    newPost
        .save()
        .then((post) => res.json(post))
        .catch((err) => res.status(400).json(err));
});

module.exports = router;
