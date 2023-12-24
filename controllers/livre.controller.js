
import mongoose from 'mongoose';

import Movie from '../models/Livre.model.js';

export const getMovies = async (req, res) => { 
    try {
        const mov = await Movie.find().populate('categorie');
                                        
          
        res.status(200).json(mov);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getMovieByID = async (req, res) => { 
    try {
        const mov = await Movie.findById(req.params.id).populate('categorie');
                                                        

        res.status(200).json(mov);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createMovie = async (req, res) => { 
    const { titre,prix,couverture,categorie } = req.body;
    
    const newMovie = new Movie({ titre:titre,prix:prix,couverture:couverture,categorie:categorie })

    try {  
        await newMovie.save();

        res.status(201).json(newMovie );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateMovie= async (req, res) => {
    const { id } = req.params;
    const { titre,prix,couverture,categorie } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de livre avec un id: ${id}`);

    const mov1 = { titre:titre,prix:prix,couverture:couverture,categorie:categorie, _id: id };

    await Movie.findByIdAndUpdate(id, mov1);

    res.json(mov1);
}

export const deleteMovie = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`pas de livre avec l'ID: ${id}`);

    await Movie.findByIdAndDelete(id);

    res.json({ message: "livre supprimé avec succès." });
}
