const schemas = require('./schemas');

const taskAdd = async (film) => {
  return schemas.addFilm.validateAsync(film);
};

exports.taskAdd = taskAdd;
