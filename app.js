const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const auth = require('./middlewares/auth');
const { login, createUser } = require('./controllers/user-auth');
const { validateSigninFields, validateSignupFields } = require('./middlewares/validation');
const { requestLogger, errorLogger } = require('./middlewares/loger');
const { errors } = require('celebrate');


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


app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
