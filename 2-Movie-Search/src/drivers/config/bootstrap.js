require('./environment');

if (process.env.LOG_TO_DB === 'true') {
  // eslint-disable-next-line global-require
  require('../orm/sequelize/singleton');
}
