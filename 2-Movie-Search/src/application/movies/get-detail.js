const { requestSchema, responseSchema, createRequest } = require('../../domain/movies/get-detail-schema');
const getDetail = require('../../data-access/repositories/movies/get-detail');

module.exports = async (title, year, plot, type, imdbId) => {
  const getDetailRequest = createRequest(
    process.env.MOVIE_API_KEY,
    title,
    year,
    plot,
    type,
    imdbId,
  );

  const getDetailRequestSchema = requestSchema.validate(getDetailRequest);

  if (getDetailRequestSchema.error) {
    throw new Error(getDetailRequestSchema.error);
  }

  const getDetailResponse = await getDetail(getDetailRequestSchema.value);
  const getDetailResponseSchema = responseSchema.validate(getDetailResponse);

  if (getDetailResponseSchema.error) {
    throw new Error(getDetailResponseSchema.error);
  }

  return getDetailResponseSchema.value;
};
