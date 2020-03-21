const path = require('path');
const fs = require('fs');

const readFromFile = async (address) => {
  try {
    const file = await fs.promises.readFile(path.resolve(__dirname, address));
    return file;
  } catch (err) {
    console.log(err);
    throw Error('kek');
  }
};

const getFilms = async () => readFromFile('../../files/db.json');

exports.getFilms = getFilms;
