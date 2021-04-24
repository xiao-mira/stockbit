const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_QUERY_STRING);

sequelize
  .authenticate()
  .then(async () => {
    // eslint-disable-next-line global-require
    require('./models/Log').sync();

    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
