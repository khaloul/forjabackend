import mongoose from "mongoose"

import Livre from "../models/Livre.model.js";

var categorieSchema = mongoose.Schema({
    nomcategorie: String
});

categorieSchema.pre('remove', async function(req,res,next) { 
    Livre.deleteMany({ categorie: { $in: [this._id] } }, function(err) {})
    next();
})

const Categorie = mongoose.model('Categorie', categorieSchema);
export default Categorie;
