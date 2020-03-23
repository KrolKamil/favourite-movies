const utils = require('../../../../utils');
const randomFilmUtils = require('../utils');

const getRandomFilmByGenres = (films, genres) => {
  const rootArray = randomFilmUtils.createArrayOfArrays(genres.length);
  let i = 0;
  for (i; i < films.length; i++) {
    const countFilmValidGenres = randomFilmUtils.countValidGenresInFilmGenres(genres, films[i].genres);
    if (countFilmValidGenres > 0) {
      rootArray[countFilmValidGenres - 1].push(films[i]);
    }
  }
  rootArray.reverse();
  return utils.flatSingleLevelArray(rootArray);
};
module.exports = getRandomFilmByGenres;
