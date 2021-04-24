const validateApiKey = (apiKey) => {
  const apiKeySet = new Set(JSON.parse(process.env.API_KEY_SET));

  return apiKeySet.has(apiKey);
};

module.exports = validateApiKey;
