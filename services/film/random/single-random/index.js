const utils = require('../../../../utils');

const getSingleRandomFilm = (films) => {
  const randomFilmIndex = utils.getRandomNumber(1, films.length);
  return films[randomFilmIndex - 1];
};

module.exports = getSingleRandomFilm;
