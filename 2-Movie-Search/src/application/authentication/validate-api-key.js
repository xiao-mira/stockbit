const validateApiKey = require('../../data-access/repositories/authentication/validate-api-key');

module.exports = async (apiKey) => {
  return validateApiKey(apiKey);
};
