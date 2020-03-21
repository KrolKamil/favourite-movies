const express = require('express');
const router = express.Router();
const files = require('../../services/files/index');

router.get('/', async (req, res) => {
  try {
    const filesDb = await files.getFilms();
    console.log(filesDb);
  } catch (e) {
    return res.status(404).send(e.message);
  }
  return res.status(200).send('ok');
});

router.post('/', (req, res) => {

});

router.get('/random', (req, res) => {

});

module.exports = router;
