require('dotenv').config();
const express = require('express');
const film = require('./api/film');
const app = express();

app.use('/film', film);

app.get('/', (req, res) => res.send('Hello World!'));

const errorHandler = (req, res, next, err) => {
  res.status(500);
  res.send({ error: 'Something failed!' });
};

app.use(errorHandler);

app.listen(process.env.PORT, () => console.log(`App listening on port ${process.env.PORT}!`));
