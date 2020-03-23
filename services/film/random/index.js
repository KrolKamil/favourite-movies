const randomFilmUtils = require('./utils');
const getSingleRandomFilm = require('./single-random');
const getRandomFilmByGenres = require('./genres');
const getRandomFilmByDurration = require('./duration');
const getRandomFilmByGenresAndDuration = require('./genres-duration');

const getRandomFilm = (films, payload) => {
  if (payload.genres && payload.duration) {
    return randomFilmUtils.normalizeRandomFilmResponse(
      getRandomFilmByGenresAndDuration(films, payload)
    );
  } else if (payload.genres) {
    return randomFilmUtils.normalizeRandomFilmResponse(
      getRandomFilmByGenres(films, payload.genres)
    );
  } else if (payload.duration) {
    return randomFilmUtils.normalizeRandomFilmResponse(
      getRandomFilmByDurration(films, payload.duration)
    );
  } else {
    return getSingleRandomFilm(films);
  }
};

module.exports = {
  getRandomFilm
};
