const utils = require('../../../../utils');

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
  rootArray.reverse();
  return utils.flatSingleLevelArray(rootArray);
};

const createArrayOfArrays = (length) => {
  const rootArray = [];
  let i = 0;
  for (i; i < length; i++) {
    rootArray.push([]);
  }
  return rootArray;
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

module.exports = getRandomFilmByGenres;
