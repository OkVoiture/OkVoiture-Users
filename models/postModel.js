const mongoose = require("mongoose");

const voitureSchema = new mongoose.Schema({
    marque: {
        required: true,
        type: String,
    },
    modele: {
        required: true,
        type: String,
    },
    annee: {
        required: true,
        type: Number,
    }
})


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
})

module.exports = mongoose.model("Post", postSchema);
