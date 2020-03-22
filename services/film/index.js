const newFilm = require('./new');
const randomFilm = require('./random');

module.exports = {
  ...newFilm,
  ...randomFilm
};
