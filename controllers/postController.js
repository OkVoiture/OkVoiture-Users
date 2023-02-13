const ApiError = require("../errors/apiError");

const Post = require("../models/postModel");
const Voiture = require("../models/voitureModel");

const createPost = async (req, res, next) => {
    try {
        //Validate params
        const {nom, email, marque, modele, annee, ville, prix, photo} =
            req.query;
        const newVoiture = await Voiture.create({
            marque,
            modele,
            annee
        });
        const newPost = await Post.create({
            nomLouer: nom,
            email,
            voiture: newVoiture._id,
            ville,
            prix,
            photo,
            date: Date.now(),
        }).catch(e => console.log("error: ", e));

        await newPost.populate("voiture");
        res.status(201).send({data: newPost});

    } catch (e) {
        next(ApiError.invalidArguments(`Invalid arguments passed`));
    }
}

module.exports = {
    createPost,
};