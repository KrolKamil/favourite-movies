const validators = require('../../../services/validators');
const files = require('../../../services/files');
const utils = require('../../../utils');

const validateNewTask = async (req, res, next) => {
  try {
    const x = await validators.taskAdd(req.body);
    console.log(x);
    next();
  } catch (e) {
    return res.status(400).send(e.message);
  }
};

const validateNewFilmGenresAndAppendFilmsDBToReq = async (req, res, next) => {
  try {
    const filmsDBasJSON = await files.getFilmsDBAsJSON();
    if (!utils.arrayContainsArray(filmsDBasJSON.genres, req.body.genres)) {
      return res.status(400).send('Genres do not contain proper values');
    }
    req.filmsDB = filmsDBasJSON;
    next();
  } catch (e) {
    return res.status(500).send('Internal Server Error');
  }
};

exports.validateNewTask = validateNewTask;
exports.validateNewFilmGenresAndAppendFilmsDBToReq = validateNewFilmGenresAndAppendFilmsDBToReq;
