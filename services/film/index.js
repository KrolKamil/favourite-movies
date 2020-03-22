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

const getRandomFilm = (filmsDB, payload) => {

};

const getSingleRandomFilm = () => {

};

const getRandomFilmByDurration = () => {

};

const getRandomFilmByGenres = () => {

};

exports.addNewFilmToFilmsDB = addNewFilmToFilmsDB;
exports.getRandomFilm = getRandomFilm;
