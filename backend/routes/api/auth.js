const express = require("express");
const router = express.Router();
const brycpt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../../models/Users");
const auth = require("../../middleware/auth");
const { route } = require("./users");

// @route   POST api/auth
// @desc    Login existing user
// @access  Public
router.post("/", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400).json({ msg: "Please fill all input fields" });

    // check if user is already registered
    User.findOne({ email }).then((user) => {
        if (!user) return res.status(400).json({ msg: "User not registered" });

        // validate user password
        bcrypt.compare(password, user.password).then((isMatch) => {
            // if password doesnt match
            if (!isMatch) return res.status(400).json({ msg: "Invalid username or password" });

            // if match, send user details and jsonwebtoken
            jwt.sign({ id: user._id }, config.get("jwtSecret"), { expiresIn: "24h" }, (err, token) => {
                if (err) console.error(err);

                // send token with user details
                res.json({
                    token,
                    user: {
                        _id: user._id,
                        name: user.name,
                        email: user.email,
                    },
                });
            });
        });
    });
});

// @route   GET api/auth/user
// @desc    Verify and get user data
// @access  Private
router.get("/user", auth, (req, res) => {
    User.findById(req.user.id) // from on jwt payload (auth middleware)
        .select("-password") // exclude password
        .then((user) => res.json(user));
});


module.exports = router;