const schemas = require('./schemas');
const utils = require('../../utils');

const newFilm = async (film) => {
  return schemas.addFilm.validateAsync(film);
};

const validateGenres = async (allGenres, genresToCheck) => {
  return utils.arrayContainsArray(allGenres, genresToCheck);
};

exports.newFilm = newFilm;
exports.validateGenres = validateGenres;
