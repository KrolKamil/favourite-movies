const validators = require('../../../services/validators');
const files = require('../../../services/files');

const preValidateNewFilm = async (req, res, next) => {
  try {
    await validators.newFilm(req.body);
    next();
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
};

const parseNewFilmProperties = (req, res, next) => {
  req.body.year = req.body.year.toString();
  req.body.runtime = req.body.runtime.toString();
  next();
};

const parseRandomFilmProperties = (req, res, next) => {
  if (req.body.duration) {
    req.body.duration = parseInt(req.body.duration);
  }
  next();
};

const preValidateRandomFilm = async (req, res, next) => {
  try {
    await validators.randomFilm(req.body);
    next();
  } catch (e) {
    return res.status(400).json({ error: e.message });
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

const validateFilmGenres = (validWithoutGenres) => async (req, res, next) => {
  if (validWithoutGenres === true) {
    if (!req.body.genres) {
      return next();
    }
  }
  const requestGenresValid = await validators.genres(req.filmsDB.genres, req.body.genres);
  if (!requestGenresValid) {
    return res.status(400).json({ error: 'genres do not contain proper values' });
  }
  next();
};

exports.preValidateNewFilm = preValidateNewFilm;
exports.preValidateRandomFilm = preValidateRandomFilm;
exports.appendFilmsDBToRequest = appendFilmsDBToRequest;
exports.validateFilmGenres = validateFilmGenres;
exports.parseNewFilmProperties = parseNewFilmProperties;
exports.parseRandomFilmProperties = parseRandomFilmProperties;
