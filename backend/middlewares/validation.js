const { celebrate, Joi } = require('celebrate');

const urlPattern = /^https?:\/\/w{0,3}\.?[\w-]+\.\w{1,3}[\w\-._~:/?#[\]@!$&'()*+,;=]*#?$/;

const validateSigninFields = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email({ minDomainSegments: 2 }),
    password: Joi.string().required(),
  }),
});

const validateSignupFields = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().required().email({ minDomainSegments: 2 }),
    password: Joi.string().required(),
  }),
});

const validateMovieFields = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().required().pattern(urlPattern),
    trailerLink: Joi.string().required().pattern(urlPattern),
    thumbnail: Joi.string().required().pattern(urlPattern),
    owner: Joi.string().required(),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

const validateMoviedId = celebrate({
  params: Joi.object().keys({
    movieId: Joi.number().required(),
  }),
});

const validateUserId = celebrate({
  params: Joi.object().keys({
    userId: Joi.string().alphanum().length(24),
  }),
});

const validateUserFields = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email({ minDomainSegments: 2 }),
    name: Joi.string().min(2).max(30).required(),
  }),
});

module.exports = {
  urlPattern,
  validateSigninFields,
  validateSignupFields,
  validateMovieFields,
  validateMoviedId,
  validateUserId,
  validateUserFields,
};
