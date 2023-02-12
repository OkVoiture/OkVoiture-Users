const ApiError = require("../errors/apiError");

const Post = require("../models/postModel");
const Voiture = require("../models/voitureModel");

const createPost = async (req, res, next) => {
    try {
        //Validate params
        console.log("query: ", req.query);

        const {nom, email, marque, modele, annee, ville, prix, photo} =
            req.query;
        const newVoiture = new Voiture({
            marque,
            modele,
            annee
        });
        const newPost = new Post({
            nomLouer: nom,
            email,
            voiture: newVoiture,
            ville,
            prix,
            photo,
            date: Date.now(),
        });

        await newPost.save().catch(_ => next(ApiError.internalError(`Database Error`)));

        res.status(201).send({data: newPost});

    } catch (e) {
        next(ApiError.invalidArguments(`Invalid arguments passed`));
    }
}

module.exports = {
    createPost,
};