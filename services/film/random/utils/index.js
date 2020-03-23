const isValidDurationCreator = (validDuration) => (toCheckDuration) => {
  const minDurration = validDuration - 10;
  const maxDurration = validDuration + 10;
  return ((toCheckDuration >= minDurration) && (toCheckDuration <= maxDurration));
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

const normalizeRandomFilmResponse = (films) => {
  if (films.length === 0) {
    return null;
  }
  return films;
};

exports.countValidGenresInFilmGenres = countValidGenresInFilmGenres;
exports.createArrayOfArrays = createArrayOfArrays;
exports.isValidDurationCreator = isValidDurationCreator;
exports.normalizeRandomFilmResponse = normalizeRandomFilmResponse;
