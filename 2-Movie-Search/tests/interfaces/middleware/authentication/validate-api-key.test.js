const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const proxyquire = require('proxyquire')
  .noCallThru()
  .noPreserveCache();

const { expect } = chai;

chai.use(sinonChai);

describe('interfaces/middleware/authentication/validate-api-key.js', async () => {
  it('Should call validate api key application once with correct parameter', async () => {
    const apiKey = 'randomstring';
    const validateApiKeyResponse = true;

    const validateApiKeyApplicationStub = sinon.stub().returns(validateApiKeyResponse);
    const nextStub = sinon.stub();
    const resSendStub = sinon.stub();

    const validateApiKeymiddlewareStub = proxyquire('../../../../src/interfaces/middleware/authentication/validate-api-key', {
      '../../../application/authentication/validate-api-key': validateApiKeyApplicationStub,
    });

    const req = {
      query: {
        apiKey,
      },
    };

    const res = {
      send: resSendStub,
    };

    await validateApiKeymiddlewareStub(req, res, nextStub);

    expect(validateApiKeyApplicationStub).calledOnceWith(apiKey);
    expect(nextStub.callCount).equals(1);
    expect(res.send.callCount).equals(0);
  });

  it('Should call return 401 error when api key is invalid', async () => {
    const apiKey = 'randomstring';
    const validateApiKeyResponse = false;

    const validateApiKeyApplicationStub = sinon.stub().returns(validateApiKeyResponse);
    const nextStub = sinon.stub();
    const resSendStub = sinon.stub();

    const validateApiKeymiddlewareStub = proxyquire('../../../../src/interfaces/middleware/authentication/validate-api-key', {
      '../../../application/authentication/validate-api-key': validateApiKeyApplicationStub,
    });

    const req = {
      query: {
        apiKey,
      },
    };

    const res = {
      status: () => {
        return {
          send: resSendStub,
        };
      },
    };

    await validateApiKeymiddlewareStub(req, res, nextStub);

    expect(validateApiKeyApplicationStub).calledOnceWith(apiKey);
    expect(nextStub.callCount).equals(0);
    expect(res.status().send).calledOnceWith({
      status: 401,
      message: 'Invalid API key!',
      data: null,
    });
  });
});
