const Joi = require('joi');

const getDetailSchema = {
  requestSchema: Joi.object({
    t: Joi.string(),
    y: Joi.number(),
    plot: Joi.string().valid('short', 'long'),
    apikey: Joi.string().required(),
    type: Joi.string().valid('movie', 'series', 'episode'),
    i: Joi.string(),
  }),

  responseSchema: Joi.object({
    Title: Joi.string(),
    Year: Joi.string(),
    Rated: Joi.string(),
    Released: Joi.string(),
    Runtime: Joi.string(),
    Genre: Joi.string(),
    Director: Joi.string(),
    Writer: Joi.string(),
    Actors: Joi.string(),
    Plot: Joi.string(),
    Language: Joi.string(),
    Country: Joi.string(),
    Awards: Joi.string(),
    Poster: Joi.string(),
    Ratings: Joi.array(),
    Metascore: Joi.string(),
    imdbRating: Joi.string(),
    imdbVotes: Joi.string(),
    imdbID: Joi.string(),
    Type: Joi.string(),
    DVD: Joi.string(),
    BoxOffice: Joi.string(),
    Production: Joi.string(),
    Website: Joi.string(),
    Response: Joi.string().required(),
    Error: Joi.string(),
  }),

  createRequest(apikey, title, year, plot, type, imdbID) {
    const requestObject = {
      t: title,
      y: year,
      plot,
      apikey,
      type,
      i: imdbID,
    };

    return requestObject;
  },
};

module.exports = getDetailSchema;
