require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const film = require('./api/film');
const app = express();

app.use(bodyParser.json());
app.use('/film', film);

app.get('/', (req, res) => {
  return res.send('Hello World!');
});

const errorHandler = (err, req, res, next) => {
  res.status(500);
  res.send({ error: 'Internal Server Error' });
};

app.use(errorHandler);

app.listen(process.env.PORT, () => console.log(`App listening on port ${process.env.PORT}!`));
