require('../config/bootstrap');

const express = require('express');

const app = express();
const movieRoutes = require('../../interfaces/routes/movies');
const loggerMiddleWare = require('../../interfaces/middleware/logger/put-logger');
const validateApiKey = require('../../interfaces/middleware/authentication/validate-api-key');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(loggerMiddleWare);
app.use(validateApiKey);

app.use(movieRoutes);

app.use((err, req, res, next) => {
  if (!err) {
    return next();
  }

  const statusCode = err.statusCode || 500;

  return res.status(statusCode).send({
    statusCode,
    message: err.message,
  });
});

app.use((req, res) => {
  res.status(404).json({
    status: 'Page does not exist',
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on PORT: http://localhost:${PORT}/`);
});
