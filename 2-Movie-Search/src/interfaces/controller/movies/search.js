const Bluebird = require('bluebird');
const searchMovie = require('../../../application/movies/search');

module.exports = async (req, res) => {
  return Bluebird.resolve()
    .then(async () => {
      const {
        searchKeyword,
        type,
        year,
        page,
      } = req.query;

      const getDetailResult = await searchMovie(
        searchKeyword,
        type,
        year,
        page,
      );

      return res.send({
        status: 200,
        message: null,
        data: getDetailResult,
      });
    })
    .catch((error) => {
      return res.status(500).send({
        status: 400,
        message: error.message,
        data: error,
      });
    });
};
