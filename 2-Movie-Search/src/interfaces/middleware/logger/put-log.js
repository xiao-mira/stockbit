const putLog = require('../../../application/logs/put-log');

module.exports = (req, res, next) => {
  putLog(
    new Date().getTime(),
    req.path,
    JSON.stringify(req.query),
  );

  next();
};
