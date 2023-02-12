const mongoose = require("mongoose");

const voitureSchema = mongoose.Schema({
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
});

module.exports = voitureSchema;
