const ApiError = require("../errors/apiError");

const Post = require("../models/postModel");
const Voiture = require("../models/voitureModel");
const multer = require("multer");

const Storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({
    storage: Storage,
}).single("photo")

const createPost = async (req, res, next) => {
    upload(req, res, async (err) => {
        if (err) {
            ApiError.internalError("Internal Error");
        } else {
            try {
                //Validate params
                const {nom, email, marque, modele, annee, ville, prix} =
                    req.body;
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
                    photo: {
                        data: req.file.filename,
                        contentType: 'image/png',
                    },
                    date: Date.now(),
                }).catch(e => console.log("error: ", e));

                await newPost.populate("voiture");
                res.status(201).send({data: newPost});

            } catch (e) {
                next(ApiError.invalidArguments(`Invalid arguments passed`));
            }
        }
    });
}

module.exports = {
    createPost,
};