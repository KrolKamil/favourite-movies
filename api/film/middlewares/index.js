const validators = require('../../../services/validators');
const files = require('../../../services/files');

const validateNewFilm = async (req, res, next) => {
  try {
    await validators.newFilm(req.body);
    next();
  } catch (e) {
    return res.status(400).send(e.message);
  }
};

const validateNewFilmGenresAndAppendFilmsDBToReq = async (req, res, next) => {
  try {
    const filmsDBasJSON = await files.getFilmsDBAsJSON();
    if (!validators.validateGenres(filmsDBasJSON.genres, req.body.genres)) {
      return res.status(400).send('Genres do not contain proper values');
    }
    req.filmsDB = filmsDBasJSON;
    next();
  } catch (e) {
    return res.status(500).send('Internal Server Error');
  }
};

const validateRandomFilmAndAppendFilmsDBToReq = (req, res, next) => {

};

exports.validateNewFilm = validateNewFilm;
exports.validateNewFilmGenresAndAppendFilmsDBToReq = validateNewFilmGenresAndAppendFilmsDBToReq;
exports.validateRandomFilm = validateRandomFilmAndAppendFilmsDBToReq;
