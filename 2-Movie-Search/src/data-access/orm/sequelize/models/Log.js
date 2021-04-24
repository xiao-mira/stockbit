const Sequelize = require('sequelize');
const sequelize = require('../singleton');

const Log = sequelize.define('Log', {
  path: {
    type: Sequelize.STRING,
  },
  parameter: {
    type: Sequelize.STRING,
  },
}, {
  createdAt: true,
  updatedAt: false,
});

module.exports = Log;
