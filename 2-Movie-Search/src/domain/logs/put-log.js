const Joi = require('joi');

const getDetailSchema = {
  requestSchema: Joi.object({
    timeStamp: Joi.number().required(),
    path: Joi.string().required(),
    parameter: Joi.string().required(),
  }),

  createRequest(timeStamp, path, parameter) {
    const requestObject = {
      timeStamp,
      path,
      parameter,
    };

    return requestObject;
  },
};

module.exports = getDetailSchema;
