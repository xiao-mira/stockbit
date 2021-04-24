const validateApiKey = require('../../drivers/repositories/authentication/validate-api-key');

module.exports = async (apiKey) => {
  return validateApiKey(apiKey);
};
