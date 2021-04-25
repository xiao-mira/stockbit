const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const proxyquire = require('proxyquire')
  .noCallThru()
  .noPreserveCache();

const { expect } = chai;

chai.use(sinonChai);

describe('interfaces/controller/movies/search.js', async () => {
  it('Should call search application once with correct parameter', async () => {
    process.env.MOVIE_API_KEY = 'randomstring';
    const searchResponse = {
      Response: 'True',
    };

    const searchMovieApplicationStub = sinon.stub().returns(searchResponse);
    const resSendStub = sinon.stub();

    const searchMovieControllerStub = proxyquire('../../../../src/interfaces/controller/movies/search', {
      '../../../application/movies/search': searchMovieApplicationStub,
    });

    const searchKeyword = 'avenger';
    const type = 'movie';
    const year = 1994;
    const page = 1;

    const req = {
      query: {
        searchKeyword,
        type,
        year,
        page,
      },
    };

    const res = {
      send: resSendStub,
    };

    await searchMovieControllerStub(req, res);

    expect(searchMovieApplicationStub).calledOnceWith(searchKeyword, type, year, page);
    expect(res.send).calledOnceWith({
      status: 200,
      message: null,
      data: searchResponse,
    });
  });

  afterEach(() => {
    delete process.env.MOVIE_API_KEY;
  });
});
