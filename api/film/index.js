const express = require('express');
const middlewares = require('./middlewares');
const film = require('../../services/film');

const router = express.Router();

router.post('/',
  middlewares.preValidateNewFilm,
  middlewares.appendFilmsDBToRequest,
  middlewares.validateFilmGenres(false),
  middlewares.parseNewFilmProperties,
  async (req, res) => {
    try {
      await film.addNewFilmToFilmsDB(req.body, req.filmsDB);
      return res.status(200).json({});
    } catch (e) {
      return res.status(500).send('Internal Server Error');
    }
  });

router.post('/random',
  middlewares.preValidateRandomFilm,
  middlewares.appendFilmsDBToRequest,
  middlewares.validateFilmGenres(true),
  middlewares.parseRandomFilmProperties,
  (req, res) => {
    const randomFilms = film.getRandomFilm(req.filmsDB.movies, req.body);
    if (randomFilms === null) {
      return res.status(404).json({ error: `can't find film with these features` });
    }
    return res.status(200).json(randomFilms);
  });

module.exports = router;
