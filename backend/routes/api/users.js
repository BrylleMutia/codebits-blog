const express = require("express");
const router = express.Router();

const User = require("../../models/Users");

// @route   /api/users
// @desc    Get all registered users
// @access  Private
router.get("/", (req, res) => {
    User.find()
    .then((users) => res.json(users))
    .catch((error) => res.status(400).json({ success: false, error }));
});

// @route   /api/users
// @desc    Register/login new user
// @access  Private
router.post("/", (req, res) => {
    const { name, email, password } = req.body;

    const newUser = new User({
        name,
        email,
        password,
    });

    newUser
        .save()
        .then((user) => res.json(user))
        .catch((error) => res.status(400).json({ success: false, error }));
});

module.exports = router;