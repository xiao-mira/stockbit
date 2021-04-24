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
    totalResults: Joi.number(),
    Response: Joi.string().required(),
    Search: Joi.array().items(
      Joi.object({
        Title: Joi.string(),
        Year: Joi.number(),
        imdbID: Joi.string(),
        Type: Joi.string(),
        Poster: Joi.string(),
      }),
    ),
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
