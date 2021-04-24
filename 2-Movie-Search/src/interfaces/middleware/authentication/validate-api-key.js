const Bluebird = require('bluebird');

const validateApiKey = require('../../../application/authentication/validate-api-key');

module.exports = (req, res, next) => {
  return Bluebird.resolve()
    .then(async () => {
      const { apiKey } = req.query;

      const validateApiKeyResult = await validateApiKey(
        apiKey,
      );

      if (!validateApiKeyResult) {
        return res.status(401).send({
          status: 401,
          message: 'Invalid API key!',
          data: null,
        });
      }

      return next();
    })
    .catch((error) => {
      return res.status(500).send({
        status: 500,
        message: error.message,
        data: error,
      });
    });
};
