const Bluebird = require('bluebird');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const proxyquire = require('proxyquire')
  .noCallThru()
  .noPreserveCache();

const { expect } = chai;

chai.use(sinonChai);

describe('application/movies/get-detail.js', async () => {
  it('Should return correct response', async () => {
    process.env.MOVIE_API_KEY = 'randomstring';
    const searchResponse = {
      Response: 'True',
    };

    const getDetailMovieRepository = sinon.stub().returns(searchResponse);

    const getDetailStub = proxyquire('../../../src/application/movies/get-detail', {
      '../../data-access/repositories/movies/get-detail': getDetailMovieRepository,
    });

    const result = await getDetailStub('avenger', 2020);

    expect(result.Response).equal(searchResponse.Response);
    expect(getDetailMovieRepository.callCount).equal(1);
  });

  it('Should return error if no api key', async () => {
    const searchResponse = {
      Response: 'True',
    };

    const getDetailStub = proxyquire('../../../src/application/movies/get-detail', {
      '../../data-access/repositories/movies/get-detail': () => Bluebird.resolve(searchResponse),
    });

    try {
      await getDetailStub('avenger', 2020);
    } catch (err) {
      expect(true).equals(true);

      return;
    }

    throw new Error('Method should throw error');
  });

  afterEach(() => {
    delete process.env.MOVIE_API_KEY;
  });
});
