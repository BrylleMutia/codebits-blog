const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    register_date: {
        type: Date,
        default: Date.now,
    },
    ratings: [
        {
            type: Number,
            required: false,
        },
    ],
});

module.exports = User = mongoose.model("user", userSchema);
