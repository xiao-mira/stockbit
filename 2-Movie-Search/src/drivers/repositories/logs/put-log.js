const putLog = (putLogRequest) => {
  if (process.env.LOG_TO_DB === 'true') {
    // eslint-disable-next-line global-require
    const Log = require('../../orm/sequelize/models/Log');

    Log.create(putLogRequest);
  } else {
    console.log(putLogRequest);
  }
};

module.exports = putLog;
