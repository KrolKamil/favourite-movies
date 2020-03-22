const validators = require('../../../services/validators');
const files = require('../../../services/files');

const preValidateNewFilm = async (req, res, next) => {
  try {
    await validators.newFilm(req.body);
    next();
  } catch (e) {
    return res.status(400).send(e.message);
  }
};

const validateFilmGenres = async (req, res, next) => {
  try {
    const requestGenresValid = await validators.genres(req.filmsDB.genres, req.body.genres);
    if (!requestGenresValid) {
      return res.status(400).send('Genres do not contain proper values');
    }
    next();
  } catch (e) {
    return res.status(500).send('Internal Server Error');
  }
};

const preValidateRandomFilm = async (req, res, next) => {
  try {
    await validators.randomFilm(req.body);
    next();
  } catch (e) {
    return res.status(400).send(e.message);
  }
};

const appendFilmsDBToRequest = async (req, res, next) => {
  try {
    const filmsDBAsJson = await files.getFilmsDBAsJSON();
    req.filmsDB = filmsDBAsJson;
    next();
  } catch (e) {
    return res.status(500).send('Internal Server Error');
  }
};

const checkIfFilmGenresValidationIsNecessary = async (req, res, next) => {
  if (req.body.genres) {
    next();
  }
  next('route');
};

exports.preValidateNewFilm = preValidateNewFilm;
exports.validateFilmGenres = validateFilmGenres;
exports.preValidateRandomFilm = preValidateRandomFilm;
exports.appendFilmsDBToRequest = appendFilmsDBToRequest;
exports.checkIfFilmGenresValidationIsNecessary = checkIfFilmGenresValidationIsNecessary;
