const utils = require('../../../utils');

const getRandomFilm = (filmsDB, payload) => {
  if (payload.genres && payload.duration) {

  } else if (payload.genres) {

  } else if (payload.duration) {
    getRandomFilmByDurration(filmsDB, payload.duration);
  } else {
    getSingleRandomFilm(filmsDB.movies);
  }
};

const getSingleRandomFilm = (films) => {
  const randomFilmId = utils.getRandomNumber(1, films.length);
  return films.find((film) => {
    return film.id === randomFilmId;
  });
};

const getRandomFilmByDurration = (films, durration) => {
  const minDurration = durration - 10;
  const maxDurration = durration + 10;
  const filmsWithSpecifiedDurration = films.filter((film) => {
    return ((film.durration >= minDurration) && (film.duration <= maxDurration));
  });
  return getSingleRandomFilm(filmsWithSpecifiedDurration);
};

const getRandomFilmByGenres = () => {

};

module.exports = {
  getRandomFilm
};
