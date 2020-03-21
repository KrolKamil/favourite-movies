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
  middlewares.validateNewTaskGenresAndSaveIndexOfNewFile,
  (req, res) => {
    console.log(req.body);
    return res.status(200).send(req.body);
  });

router.get('/random', (req, res) => {

});

module.exports = router;
