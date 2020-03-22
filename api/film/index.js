const express = require('express');
const middlewares = require('./middlewares');
const film = require('../../services/film');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    return res.status(200).send('hi');
  } catch (e) {
    return res.status(404).send(e.message);
  }
});

router.post('/',
  middlewares.preValidateNewFilm,
  middlewares.appendFilmsDBToRequest,
  middlewares.validateFilmGenres(false),
  async (req, res) => {
    try {
      await film.addNewFilmToFilmsDB(req.body, req.filmsDB);
      return res.status(200).send(req.filmsDB);
    } catch (e) {
      return res.status(500).send('Internal Server Error');
    }
  });

router.post('/random',
  middlewares.preValidateRandomFilm,
  middlewares.appendFilmsDBToRequest,
  middlewares.validateFilmGenres(true),
  (req, res) => {
    const randomFilms = film.getRandomFilm(req.filmsDB.movies, req.body);
    return res.status(200).send(randomFilms);
  });

module.exports = router;
