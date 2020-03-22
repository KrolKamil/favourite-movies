const files = require('../files');

const addNewFilmToFilmsDB = async (newFilm, filmsDB) => {
  newFilm.id = getNewFilmId(filmsDB);
  filmsDB.movies.push(newFilm);
  await files.saveFilmsDB(filmsDB);
};

const getNewFilmId = (filmsDB) => {
  let newFilmId = filmsDB.movies.length;
  newFilmId++;
  return newFilmId;
};

exports.addNewFilmToFilmsDB = addNewFilmToFilmsDB;
