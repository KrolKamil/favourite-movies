const express = require('express');
const files = require('../../services/files/index');
const middlewares = require('./middlewares');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const filesDb = await files.getFilms();
    return res.status(200).send(filesDb);
  } catch (e) {
    return res.status(404).send(e.message);
  }
});

router.post('/',
  middlewares.validateNewTask,
  middlewares.validateNewFilmGenresAndAppendFilmsDBToReq,
  async (req, res) => {
    try {
      const newFilm = req.body;
      let newFilmId = req.filmsDB.movies.length;
      newFilmId++;
      newFilm.id = newFilmId;
      req.filmsDB.movies.push(newFilm);
      await files.saveFilmsDB(req.filmsDB);
      return res.status(200).send(req.filmsDB);
    } catch (e) {
      return res.status(500).send('Internal Server Error');
    }
  });

router.get('/random', (req, res) => {

});

module.exports = router;
