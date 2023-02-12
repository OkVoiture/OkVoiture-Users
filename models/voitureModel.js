const mongoose = require("mongoose");
const voitureSchema = require("./voitureSchema");

module.exports = mongoose.model("Voiture", voitureSchema);
