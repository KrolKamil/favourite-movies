const getSingleRandomFilm = require('../single-random');

const getRandomFilmByDurration = (films, durration) => {
  const minDurration = durration - 10;
  const maxDurration = durration + 10;
  const filmsWithSpecifiedDurration = films.filter((film) => {
    return ((film.runtime >= minDurration) && (film.runtime <= maxDurration));
  });
  return getSingleRandomFilm(filmsWithSpecifiedDurration);
};

module.exports = getRandomFilmByDurration;
