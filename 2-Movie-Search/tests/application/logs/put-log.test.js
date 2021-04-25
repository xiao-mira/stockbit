const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const proxyquire = require('proxyquire')
  .noCallThru()
  .noPreserveCache();

const { expect } = chai;

chai.use(sinonChai);

describe('application/logs/put-log', async () => {
  it('Should call put log method', async () => {
    const putLogRepository = sinon.stub().returns();

    const putLogStub = proxyquire('../../../src/application/logs/put-log', {
      '../../data-access/repositories/logs/put-log': putLogRepository,
    });

    const timeStamp = new Date().getTime();
    const path = '/foo';
    const parameter = '{"foo": "bar"}';

    const requestObject = {
      timeStamp,
      path,
      parameter,
    };

    await putLogStub(timeStamp, path, parameter);

    expect(putLogRepository).calledOnceWith(requestObject);
  });

  afterEach(() => {
    delete process.env.MOVIE_API_KEY;
  });
});
