const Bluebird = require('bluebird');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const proxyquire = require('proxyquire')
  .noCallThru()
  .noPreserveCache();

const { expect } = chai;

chai.use(sinonChai);

describe('application/movies/search.js', async () => {
  it('Should return correct response', async () => {
    process.env.MOVIE_API_KEY = 'randomstring';
    const searchResponse = {
      Response: 'True',
    };

    const searchMovieRepository = sinon.stub().returns(searchResponse);

    const searchStub = proxyquire('../../../src/application/movies/search', {
      '../../data-access/repositories/movies/search': searchMovieRepository,
    });

    const result = await searchStub('avenger');

    expect(result.Response).equal(searchResponse.Response);
    expect(searchMovieRepository.callCount).equal(1);
  });

  it('Should return error if no api key', async () => {
    const searchResponse = {
      Response: 'True',
    };

    const searchStub = proxyquire('../../../src/application/movies/search', {
      '../../data-access/repositories/movies/search': () => Bluebird.resolve(searchResponse),
    });

    try {
      await searchStub('avenger');
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
