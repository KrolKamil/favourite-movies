const path = require('path');
const fs = require('fs');
const utils = require('../../utils/index');

const readFromFile = async (address) => fs.promises.readFile(path.resolve(__dirname, address), 'utf-8');

const getFilms = async () => {
  const fetchedFile = await readFromFile('../../files/db.json');
  return utils.parseJsonAsync(fetchedFile);
};

exports.getFilms = getFilms;
