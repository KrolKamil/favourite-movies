const utils = require('../../../../utils');
const randomFilmUtils = require('../utils');

const getRandomFilmByGenresAndDuration = (films, payload) => {
  const isValidDuration = randomFilmUtils.isValidDurationCreator(payload.duration);
  const rootArray = randomFilmUtils.createArrayOfArrays(payload.genres.length);
  let i = 0;
  for (i; i < films.length; i++) {
    const countFilmValidGenres = randomFilmUtils.countValidGenresInFilmGenres(payload.genres, films[i].genres);
    if (isValidDuration(films[i].runtime)) {
      if (countFilmValidGenres > 0) {
        rootArray[countFilmValidGenres - 1].push(films[i]);
      }
    }
  }
  rootArray.reverse();
  return utils.flatSingleLevelArray(rootArray);
};
module.exports = getRandomFilmByGenresAndDuration;
