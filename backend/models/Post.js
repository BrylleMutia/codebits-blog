const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    date: {
        type: Date,
        default: Date.now,
    },
    title: {
        type: String,
        required: true,
        trim: true,
    },
    header: {
        type: String,
        required: false,
    },
    rating: [
        {
            type: Number,
            required: false,
        },
    ],
    images: [
        {
            type: String,
        },
    ],
});

module.exports = Post = mongoose.model("post", postSchema);
