const Movie = require('../models/movie');
const NotFoundError = require('../errors/not-found-err');
const ValidationError = require('../errors/validation-error');

const getMovies = (req, res, next) => {
  Movie.find({})
    .then((movies) => {
      res.status(200).send(movies);
    })
    .catch(next);
};

const createMovie = (req, res, next) => {
  const {
    country, director, duration, year, description,
    image, trailerLink, thumbnail, nameRU, nameEN, movieId, owner,
  } = req.body;

  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    owner,
    movieId,
    nameRU,
    nameEN,
  })
    .then((movies) => res.status(201).send(movies))
    .catch((err) => {
      if (err.name === ('ValidationError' || 'CastError')) return next(new ValidationError('Переданы некорректные данные'));
      return next(err);
    });
};

const deleteMovie = (req, res, next) => {
  const { movieId } = req.params;

  return Movie.findOneAndDelete({ movieId })
    .orFail(new NotFoundError('Запрашиваемая запись не найдена'))
    .then((movie) => res.status(200).send(movie))
    .catch(next);
};

module.exports = { getMovies, createMovie, deleteMovie };
