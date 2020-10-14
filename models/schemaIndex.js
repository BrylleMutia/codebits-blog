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
    saved: [
        {
            type: Schema.Types.ObjectId,
            ref: "post",
        },
    ],
    rated: [
        {
            postId: { type: String },
            rating: { type: Number },
        },
    ],
});

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
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    images: [
        {
            type: String,
        },
    ],
});

const User = mongoose.model("user", userSchema);
const Post = mongoose.model("post", postSchema);

module.exports = { User, Post };
