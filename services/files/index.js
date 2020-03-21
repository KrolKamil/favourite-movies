const path = require('path');
const fs = require('fs');
const utils = require('../../utils/index');

const readFromFile = async (address) => fs.promises.readFile(path.resolve(__dirname, address), 'utf-8');
const writeToFile = async (address, data) => fs.promises.writeFile(path.resolve(__dirname, address), data);

const getFilmsDBAsJSON = async () => {
  const fetchedFile = await readFromFile('../../files/db.json');
  return utils.parseJsonAsync(fetchedFile);
};

const saveFilmsDB = async (updatedFilmsDB) => {
  const stringifiedUpdatedFilmsDB = JSON.stringify(updatedFilmsDB, null, 2);
  return writeToFile('../../files/db.json', stringifiedUpdatedFilmsDB);
};

exports.getFilmsDBAsJSON = getFilmsDBAsJSON;
exports.saveFilmsDB = saveFilmsDB;
