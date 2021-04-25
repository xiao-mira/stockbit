const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const proxyquire = require('proxyquire')
  .noCallThru()
  .noPreserveCache();

const { expect } = chai;

chai.use(sinonChai);

describe('interfaces/middleware/logger/put-log', async () => {
  it('Should call put log and next', async () => {
    const putLogResponse = false;

    const putLogApplicationStub = sinon.stub().returns(putLogResponse);
    const nextStub = sinon.stub();

    const putLogmiddlewareStub = proxyquire('../../../../src/interfaces/middleware/logger/put-log', {
      '../../../application/logs/put-log': putLogApplicationStub,
    });

    const req = {};
    const res = {};

    await putLogmiddlewareStub(req, res, nextStub);

    expect(putLogApplicationStub.callCount).equals(1);
    expect(nextStub.callCount).equals(1);
  });
});
