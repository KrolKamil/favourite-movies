const Joi = require('@hapi/joi');
const addFilm = Joi.object({
  genres: Joi.array(),
  title: Joi.string().min(1).max(30).required(),
  year: Joi.number().required(),
  runtime: Joi.number().required(),
  director: Joi.string().max(255).required(),
  actors: Joi.string().optional(),
  plot: Joi.string().optional(),
  posterUrl: Joi.string().optional()
});

exports.addFilm = addFilm;

// - a list of genres (only predefined ones from db file) (required, array of predefined strings)
// - title (required, string, max 255 characters)
// - year (required, number)
// - runtime (required, number)
// - director (required, string, max 255 characters)
// - actors (optional, string)
// - plot (optional, string)
// - posterUrl (optional, string)
