const User = require('../models/user');
const NotFoundError = require('../errors/not-found-err');
const AlreadyExistsError = require('../errors/already-exists-err');
const ValidationError = require('../errors/validation-error');

const getUserInfo = (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => res.status(200).send(user))
    .catch(next);
};

const updateUserInfo = (req, res, next) => {
  const { name, email } = req.body;
  User.findByIdAndUpdate(
    req.user._id,
    { name, email },
    { new: true, runValidators: true },
  )
    .orFail(new NotFoundError('Запрашиваемая запись не найдена'))
    .then((user) => res.status(200).send(user))
    .catch((err) => {
      if (err.name === ('ValidationError' || 'CastError')) return next(new ValidationError('Переданы некорректные данные'));
      if (err.code === 11000) return next(new AlreadyExistsError('Данный email уже зарегистрирован!'));
      return next(err);
    });
};

module.exports = { getUserInfo, updateUserInfo };
