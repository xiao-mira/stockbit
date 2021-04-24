const express = require('express');

const router = express.Router();

const getDetailController = require('../controller/movies/get-detail');
const serchController = require('../controller/movies/search');

router
  .get('/search', serchController)
  .get('/detail', getDetailController);

module.exports = router;
