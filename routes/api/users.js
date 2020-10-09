const express = require("express");
const router = express.Router();
const brcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

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
// @desc    Register new user
// @access  Private
router.post("/", (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ msg: "Please fill all input fields" });
    }

    // check for existing user
    User.findOne({ email }).then((user) => {
        if (user) res.status(400).json({ msg: "User already exists" });

        const newUser = new User({
            name,
            email,
            password,
            saved: [],
            rated: []
        });

        // generate salt and hash for user password
        brcrypt.genSalt(10, (err, salt) => {
            brcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) console.error(err);

                newUser.password = hash;
                newUser.save().then((user) => {
                    // generate jsonwebtoken then send with details
                    jwt.sign({ id: user._id }, config.get("jwtSecret"), { expiresIn: "24h" }, (err, token) => {
                        if (err) console.error(err);

                        res.json({
                            token,
                            user: {
                                _id: user.id,
                                name: user.name,
                                email: user.email,
                                saved: user.saved,
                                rated: user.rated
                            },
                        });
                    });
                });
            });
        });
    });
});

module.exports = router;
