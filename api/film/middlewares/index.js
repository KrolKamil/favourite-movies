const validators = require('../../../services/validators');
const files = require('../../../services/files');
const utils = require('../../../utils');

const validateNewTask = async (req, res, next) => {
  try {
    await validators.taskAdd(req.body);
    next();
  } catch (e) {
    res.status(400).send(e.message);
  }
};

const validateNewTaskGenres = async (req, res, next) => {
  try {
    const genres = await files.getFilmsGenres();
    if (utils.arrayContainsArray(genres, req.body.genres)) {
      next();
    }
    res.status(400).send('Genres do not contain proper values');
  } catch (e) {
    res.status(500).send('Internal Server Error');
  }
};

exports.validateNewTask = validateNewTask;
exports.validateNewTaskGenres = validateNewTaskGenres;
