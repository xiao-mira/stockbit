const Joi = require('joi');

const searchSchema = {
  requestSchema: Joi.object({
    s: Joi.string(),
    type: Joi.string().valid('movie', 'series', 'episode'),
    y: Joi.number(),
    page: Joi.number(),
    apikey: Joi.string().required(),
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

  createRequest(apikey, searchKeyword, type, year, page) {
    const requestObject = {
      s: searchKeyword,
      type,
      y: year,
      page,
      apikey,
    };

    return requestObject;
  },
};

module.exports = searchSchema;
