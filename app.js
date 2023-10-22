const express = require('express');
const mongoose = require('mongoose');
const auth = require('./middlewares/auth');
const { login, createUser } = require('./controllers/user-auth');

const app = express();
const { PORT = 3000, DB_URL = 'mongodb://127.0.0.1:27017/bitfilmsdb' } = process.env;

mongoose.connect(DB_URL);

app.post('/signin', login);
app.post('/signup', createUser);

app.use(auth);
app.use('/users', require('./routes/users'));
app.use('/movies', require('./routes/movies'));

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
