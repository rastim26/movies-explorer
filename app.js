require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const { errors } = require('celebrate');
const auth = require('./middlewares/auth');
const errorHandler = require('./middlewares/error-handler');
const { requestLogger, errorLogger } = require('./middlewares/loger');
const { validateSigninFields, validateSignupFields } = require('./middlewares/validation');
const { login, createUser } = require('./controllers/user-auth');

const app = express();
const { PORT = 3000, DB_URL = 'mongodb://127.0.0.1:27017/bitfilmsdb' } = process.env;

mongoose.connect(DB_URL);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());
app.use(requestLogger);

app.post('/signin', validateSigninFields, login);
app.post('/signup', validateSignupFields, createUser);

app.use(auth);
app.use('/users', require('./routes/users'));
app.use('/movies', require('./routes/movies'));

app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
