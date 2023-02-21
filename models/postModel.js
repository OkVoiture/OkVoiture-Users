const mongoose = require("mongoose");
const {Schema} = require("mongoose");

const postSchema = mongoose.Schema({
    nomLouer: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
    },
    voiture: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Voiture',
    },
    ville: {
        required: true,
        type: String,
    },
    prix: {
        required: true,
        type: Number,
    },
    photo: {
        required: false,
        data: Buffer,
        contentType: String,
    },
    date: {
        required: true,
        type: Date,
    }
});

module.exports = mongoose.model("Post", postSchema);
