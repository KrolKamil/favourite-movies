const Joi = require('@hapi/joi');

const addFilm = Joi.object({
  genres: Joi.array().items(Joi.string()).unique(),
  title: Joi.string().min(1).max(30).required(),
  year: Joi.number().required(),
  runtime: Joi.number().required(),
  director: Joi.string().max(255).required(),
  actors: Joi.string().optional(),
  plot: Joi.string().optional(),
  posterUrl: Joi.string().optional()
});

const randomFilm = Joi.object({
  genres: Joi.array().items(Joi.string()).optional(),
  duration: Joi.number().min(1).optional()
});

exports.addFilm = addFilm;
exports.randomFilm = randomFilm;
