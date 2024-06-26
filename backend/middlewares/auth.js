const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/unauthorized-err');

const { NODE_ENV, JWT_SECRET, defaultJwtSecret } = process.env;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer')) throw new UnauthorizedError('Необходима авторизация');
  const token = authorization.replace('Bearer ', '');

  let payload;
  try {
    payload = jwt.verify(
      token,
      NODE_ENV === 'production' ? JWT_SECRET : defaultJwtSecret,
    );
  } catch (e) { throw new UnauthorizedError('Необходима авторизация'); }
  req.user = payload;
  next();
};
