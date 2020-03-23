const Joi = require('@hapi/joi');

const addFilm = Joi.object({
  genres: Joi.array().items(Joi.string().required()).unique().required(),
  title: Joi.string().min(1).max(30).required(),
  year: Joi.number().integer().required(),
  runtime: Joi.number().integer().positive().required(),
  director: Joi.string().max(255).required(),
  actors: Joi.string().optional(),
  plot: Joi.string().optional(),
  posterUrl: Joi.string().uri().optional()
});

const randomFilm = Joi.object({
  genres: Joi.array().items(Joi.string().required()).unique().optional(),
  duration: Joi.number().integer().positive().min(1).optional()
});

exports.addFilm = addFilm;
exports.randomFilm = randomFilm;
