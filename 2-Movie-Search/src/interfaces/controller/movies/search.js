const search = require('../../../services/movies/search');

module.exports = async (req, res) => {
  const searchResult = await search();

  return res.send(searchResult);
};
