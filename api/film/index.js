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
  middlewares.validateNewTask,
  middlewares.validateNewFilmGenresAndAppendFilmsDBToReq,
  async (req, res) => {
    try {
      await film.addNewFilmToFilmsDB(req.body, req.filmsDB);
      return res.status(200).send(req.filmsDB);
    } catch (e) {
      return res.status(500).send('Internal Server Error');
    }
  });

router.get('/random', (req, res) => {

});

module.exports = router;
