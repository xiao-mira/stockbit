module.exports = async (req, res, next) => {
  console.log({
    timeStamp: new Date().getTime(),
    path: req.originalUrl,
    parameter: JSON.stringify(req.query),
  });

  return next();
};
