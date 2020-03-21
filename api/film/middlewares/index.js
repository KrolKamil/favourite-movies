const validators = require('../../../services/validators');

const validateNewTask = async (req, res, next) => {
  try {
    const valid = validators.taskAdd(req.body);
    console.log(valid);
    res.status(200).send('working');
  } catch (e) {
    console.log(e);
    res.status(400).send('error');
  }
};

exports.validateNewTask = validateNewTask;
