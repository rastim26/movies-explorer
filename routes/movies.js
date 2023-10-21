const router = require('express').Router();
const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');

router.get('/', getMovies);
router.post('/', createMovie);
router.delete('/', deleteMovie);

module.exports = router;
