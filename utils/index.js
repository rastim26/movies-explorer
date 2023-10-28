const {
  PORT = 3000,
  DB_URL = 'mongodb://127.0.0.1:27017/bitfilmsdb',
  NODE_ENV = 'production',
  JWT_SECRET,
} = process.env;

const defaultJwtSecret = 'some-secret-key';

module.exports = {
  PORT, DB_URL, NODE_ENV, JWT_SECRET, defaultJwtSecret,
};
