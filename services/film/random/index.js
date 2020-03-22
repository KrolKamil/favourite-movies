const utils = require('../../../utils');

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

const getRandomFilmByGenres = (films, genres) => {
  const rootArray = createArrayOfArrays(genres.length);
  let i = 0;

  let filmsLength = films.length;
  for (i; i < filmsLength; i++) {
    const countFilmValidGenres = countValidGenresInFilmGenres(genres, films[i].genres);
    if (countFilmValidGenres > 0) {
      rootArray[countFilmValidGenres - 1].push(films[i]);
    }
  }
  return rootArray.flat();
};

const countValidGenresInFilmGenres = (validGenres, filmGenres) => {
  let validGenresInFilmGenres = 0;
  let i = 0;
  for (i; i < filmGenres.length; i++) {
    if (validGenres.indexOf(filmGenres[i]) >= 0) {
      validGenresInFilmGenres++;
    }
  }
  return validGenresInFilmGenres;
};

const createArrayOfArrays = (length) => {
  const rootArray = [];
  let i = 0;
  for (i; i < length; i++) {
    rootArray.push([]);
  }
  return rootArray;
};

module.exports = {
  getRandomFilm
};
