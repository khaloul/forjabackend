import express from 'express';
const router = express.Router();

import { getMovies, getMovieByID, createMovie, updateMovie, deleteMovie } from '../controllers/livre.controller.js';

/**
 * @route   GET /api/movies
 * @desc    Get All movies
 * @access  Public
 */
router.get('/', getMovies);

/**
 * @route   POST /api/movies
 * @desc    Ajouter un movie
 * @access  Public
 */
router.post('/', createMovie);

/**
 * @route   GET /api/movies/:id
 * @desc    Renvoyer un movie
 * @access  Public
 */
router.get('/:id', getMovieByID);

/**
 * @route   PUT /api/movies/:id
 * @desc    Modifier un movie
 * @access  Public
 */
router.put('/:id', updateMovie);

/**
 * @route  DELETE /api/movies/:id
 * @desc    Supprimer un movie
 * @access  Public
 */
router.delete('/:id', deleteMovie);

export default router;
