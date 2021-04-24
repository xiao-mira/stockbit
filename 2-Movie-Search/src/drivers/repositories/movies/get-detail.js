const request = require('../../utils/request');

module.exports = (movieRequest) => {
  return request.get(process.env.MOVIE_API_URL, {
    params: movieRequest,
  })
    .then((movieResponse) => {
      if (movieResponse.status !== 200) {
        throw new Error(movieResponse.data.Error);
      }

      return movieResponse.data;
    })
    .catch((errorResponse) => {
      throw new Error(errorResponse.statusText);
    });
};
