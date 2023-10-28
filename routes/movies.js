const router = require('express').Router();
const { getMovies, createMovie, deleteMovie } = require('../controllers/movies');
const { validateMovieFields, validateMoviedId } = require('../middlewares/validation');

router.get('/', getMovies);
router.post('/', validateMovieFields, createMovie);
router.delete('/:movieId', validateMoviedId, deleteMovie);

module.exports = router;
