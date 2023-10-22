const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/unauthorized-err');

const {
  NODE_ENV = 'production',
  JWT_SECRET,
} = process.env;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startWith('Bearer')) throw new UnauthorizedError('Необходима авторизация');
  const token = authorization.replace('Bearer ', '');

  let payload;
  try {
    payload = jwt.verify(
      token,
      NODE_ENV === 'production' ? JWT_SECRET : 'some-secret-key',
    );
  } catch (e) { throw new UnauthorizedError('Необходима авторизация'); }
  req.user = payload;
  next();
};
