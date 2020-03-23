const getSingleRandomFilm = require('../single-random');
const randomFilmUtils = require('../utils');

const getRandomFilmByDurration = (films, durration) => {
  const isValidDurration = randomFilmUtils.isValidDurationCreator(durration);
  const filmsWithSpecifiedDurration = films.filter((film) => {
    return isValidDurration(film.runtime);
  });
  if (filmsWithSpecifiedDurration.length === 0) {
    return filmsWithSpecifiedDurration;
  }
  return [getSingleRandomFilm(filmsWithSpecifiedDurration)];
};

module.exports = getRandomFilmByDurration;
