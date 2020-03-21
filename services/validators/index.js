const schemas = require('./schemas');

const taskAdd = async (film) => {
  return schemas.addFilm.validateAsync(film);
};

const taskRandom = () => {

};

exports.taskAdd = taskAdd;
