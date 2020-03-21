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
      console.log('test');
      console.log(req.body);
      req.body.id = ++req.filmsDB.movies.length;
      req.filmsDB.movies.push(req.body);
      await files.saveFilmsDB(req.filmsDB);
      return res.status(200).send(req.filmsDB);
    } catch (e) {
      return res.status(500).send('Internal Server Error');
    }
  });

router.get('/random', (req, res) => {

});

module.exports = router;
