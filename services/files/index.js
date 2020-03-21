const path = require('path');
const fs = require('fs');
const utils = require('../../utils/index');

const readFromFile = async (address) => fs.promises.readFile(path.resolve(__dirname, address), 'utf-8');

const getFilmsDBAsJSON = async () => {
  const fetchedFile = await readFromFile('../../files/db.json');
  return utils.parseJsonAsync(fetchedFile);
};

const getFilmsGenres = async () => {
  const filmsJSON = await getFilmsDBAsJSON();
  return filmsJSON.genres;
};

const getFilmsList = async () => {
  const filmsJSON = await getFilmsDBAsJSON();
  return filmsJSON.movies;
};

exports.getFilmsGenres = getFilmsGenres;
exports.getFilmsList = getFilmsList;
