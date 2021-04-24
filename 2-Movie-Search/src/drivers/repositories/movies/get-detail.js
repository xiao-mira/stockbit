const request = require('../../utils/request');

module.exports = (getDetailRequest) => {
  return request.get(process.env.MOVIE_API_URL, {
    params: getDetailRequest,
  })
    .then((getDetailResponse) => {
      if (getDetailResponse.status !== 200) {
        throw new Error(getDetailResponse.data.Error);
      }

      return getDetailResponse.data;
    })
    .catch((errorResponse) => {
      throw new Error(errorResponse.statusText);
    });
};
