const validators = require('../../../services/validators');

const validateNewTask = async (req, res, next) => {
  try {
    await validators.taskAdd(req.body);
    next();
  } catch (e) {
    res.status(400).send(e.message);
  }
};

exports.validateNewTask = validateNewTask;
