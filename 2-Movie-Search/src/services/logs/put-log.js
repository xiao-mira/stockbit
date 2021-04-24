const { requestSchema, createRequest } = require('../../model/logs/put-log');
const putLog = require('../../drivers/repositories/logs/put-log');

module.exports = (timeStamp, path, parameter) => {
  const putLogRequest = createRequest(timeStamp, path, parameter);

  const putLogRequestSchema = requestSchema.validate(putLogRequest);

  if (putLogRequestSchema.error) {
    throw new Error(putLogRequestSchema.error);
  }

  putLog(putLogRequestSchema.value);
};
