const mongoose = require("mongoose");
const { Binary } = require("mongodb");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    header: {
        type: String,
        required: false
    },
    images: {
        type: Binary,
    }
})