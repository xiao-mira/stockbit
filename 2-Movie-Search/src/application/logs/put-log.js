const { requestSchema, createRequest } = require('../../domain/logs/put-log');
const putLog = require('../../data-access/repositories/logs/put-log');

module.exports = (timeStamp, path, parameter) => {
  const putLogRequest = createRequest(timeStamp, path, parameter);

  const putLogRequestSchema = requestSchema.validate(putLogRequest);

  if (putLogRequestSchema.error) {
    throw new Error(putLogRequestSchema.error);
  }

  putLog(putLogRequestSchema.value);
};
