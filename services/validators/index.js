const schemas = require('./schemas');
const utils = require('../../utils');

const newFilm = async (film) => {
  return schemas.addFilm.validateAsync(film);
};

const genres = async (allGenres, genresToCheck) => {
  return utils.arrayContainsArray(allGenres, genresToCheck);
};

const randomFilm = async (parameters) => {
  return schemas.randomFilm.validateAsync(parameters);
};

exports.newFilm = newFilm;
exports.genres = genres;
exports.randomFilm = randomFilm;
