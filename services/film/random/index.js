const getSingleRandomFilm = require('./single-random');
const getRandomFilmByGenres = require('./genres');
const getRandomFilmByDurration = require('./duration');

const getRandomFilm = (films, payload) => {
  if (payload.genres && payload.duration) {
    return getRandomFilmByGenres(films, payload.genres);
  } else if (payload.genres) {
    return getRandomFilmByGenres(films, payload.genres);
  } else if (payload.duration) {
    return getRandomFilmByDurration(films, payload.duration);
  } else {
    return getSingleRandomFilm(films);
  }
};

module.exports = {
  getRandomFilm
};
