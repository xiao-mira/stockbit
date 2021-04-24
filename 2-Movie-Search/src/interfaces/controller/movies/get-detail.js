const Bluebird = require('bluebird');
const getDetail = require('../../../services/movies/get-detail');

module.exports = async (req, res) => {
  return Bluebird.resolve()
    .then(async () => {
      const {
        title,
        year,
        plot,
        type,
        imdbId,
      } = req.query;

      const getDetailResult = await getDetail(title, year, plot, type, imdbId);

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
