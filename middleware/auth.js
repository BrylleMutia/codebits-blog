const config = require("config");
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    // get token from request
    const token = req.header("x-auth-token");

    // check for token
    if (!token) return res.status(401).json({ msg: "No token, authorization denied " });

    try {
        // verify token then decode payload
        const decoded = jwt.verify(token, config.get("jwtSecret"));

        // add user from jwt payload
        req.user = decoded;
        next();
    } catch (e) {
        return res.status(400).json({ msg: "Invalid token " });
    }
};

module.exports = auth;
