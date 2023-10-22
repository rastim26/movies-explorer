const NotFoundError = require('../errors/not-found-err');

const Movie = require('../models/movie');

const getMovies = (req, res, next) => {
  Movie.find({})
    .then((movies) => res.status(200).send(movies))
    .catch(next);
};

const createMovie = (req, res, next) => {
  const {
    country, director, duration, year, description,
    image, trailerLink, thumbnail, nameRU, nameEN, movieId,
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
    owner: req.user._id,
    movieId,
    nameRU,
    nameEN,
  })
    .then((movies) => res.staatus(201).send(movies))
    .catch(next);
};

const deleteMovie = (req, res, next) => {
  const { movieId } = req.params;

  Movie.findById(movieId)
    .orFail(new NotFoundError('Запрашиваемая запись не найдена'))
    .then((movie) => {
      // if (userId !== movie.owner.toString()) throw new ForbiddenError('У вас недостаточно прав');
      Movie.deleteOne(movie)
        .then(() => res.status(200).send(movie));
    })
    .catch(next);
};

module.exports = { getMovies, createMovie, deleteMovie };
