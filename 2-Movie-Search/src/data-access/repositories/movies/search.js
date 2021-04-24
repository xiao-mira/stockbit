const request = require('../../utils/request');

module.exports = (searcRequest) => {
  return request.get(process.env.MOVIE_API_URL, {
    params: searcRequest,
  })
    .then((searcResponse) => {
      if (searcResponse.status !== 200) {
        throw new Error(searcResponse.data.Error);
      }

      return searcResponse.data;
    })
    .catch((errorResponse) => {
      throw new Error(errorResponse.statusText);
    });
};
