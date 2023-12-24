import mongoose from "mongoose"
var movieSchema = mongoose.Schema({
    titre: {type: String, required: true},
    prix: Number,
    couverture: String,
    categorie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categorie'
    },
})
const movie = mongoose.model('Movie', movieSchema);
export default movie
