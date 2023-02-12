const mongoose = require("mongoose");
const voitureSchema = require("./voitureSchema");

const postSchema = new mongoose.Schema({
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
        type: voitureSchema,
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
        type: Number,
    }
});

module.exports = mongoose.model("Post", postSchema);
