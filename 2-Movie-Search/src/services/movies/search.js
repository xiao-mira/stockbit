const { requestSchema, responseSchema, createRequest } = require('../../model/movies/search-schema');
const search = require('../../drivers/repositories/movies/search');

module.exports = async (searchKeyword, type, year, page) => {
  const searchRequest = createRequest(
    process.env.MOVIE_API_KEY,
    searchKeyword,
    type,
    year,
    page,
  );

  const searchRequestSchema = requestSchema.validate(searchRequest);

  if (searchRequestSchema.error) {
    throw new Error(searchRequestSchema.error);
  }

  const searchResponse = await search(searchRequestSchema.value);

  const searchResponseSchema = responseSchema.validate(searchResponse);

  if (searchResponseSchema.error) {
    throw new Error(searchResponseSchema.error);
  }

  return searchResponseSchema.value;
};
