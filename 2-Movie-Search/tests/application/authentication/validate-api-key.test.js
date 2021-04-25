const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const proxyquire = require('proxyquire')
  .noCallThru()
  .noPreserveCache();

const { expect } = chai;

chai.use(sinonChai);

describe('application/authentication/validate-api-key', async () => {
  it('Should return correct response', async () => {
    const validateApiKeyResponse = true;
    const apiKey = 'avenger';

    const validateApiKeyRepository = sinon.stub().returns(validateApiKeyResponse);

    const validateApiKeyStub = proxyquire('../../../src/application/authentication/validate-api-key', {
      '../../data-access/repositories/authentication/validate-api-key': validateApiKeyRepository,
    });

    const result = await validateApiKeyStub(apiKey);

    expect(result).equal(validateApiKeyResponse);
    expect(validateApiKeyRepository).calledOnceWith(apiKey);
  });

  afterEach(() => {
    delete process.env.MOVIE_API_KEY;
  });
});
