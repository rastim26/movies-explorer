const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const AlreadyExistsError = require('../errors/already-exists-err');

const { NODE_ENV = 'production', JWT_SECRET } = process.env;

const createUser = (req, res, next) => {
  const { name, email, password} = req.body;
  bcrypt.hash(password, 10)
    .then((hash) => User.create({
      name,
      email,
      password: hash,
    }))
    .then(() => res.status(201).send({ message: 'Пользователь добавлен!' }))
    .catch((err) => {
      if (err.code === 11000) return next(new AlreadyExistsError('Данный email уже зарегистрирован!'));
      return next(err);
    });
};

const login = (req, res, next) => {
  const { email, password } = req.body;
  User.findUserByCredentials({ email, password })
    .then((user) => {
      const token = jwt.sign(
        { _id: user._id },
        NODE_ENV === 'production' ? JWT_SECRET : 'some-secret-key',
        { expiresIn: '7d' },
      );
      res.status(200).send({ token });
    })
    .catch(next);
};

module.exports = { createUser, login };
