const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const proxyquire = require('proxyquire')
  .noCallThru()
  .noPreserveCache();

const { expect } = chai;

chai.use(sinonChai);

describe('interfaces/controller/movies/get-detail.js', async () => {
  it('Should call get detail application once with correct parameter', async () => {
    process.env.MOVIE_API_KEY = 'randomstring';
    const getDetailResponse = {
      Response: 'True',
    };

    const getDetailMovieApplicationStub = sinon.stub().returns(getDetailResponse);
    const resSendStub = sinon.stub();

    const getDetailMovieControllerStub = proxyquire('../../../../src/interfaces/controller/movies/get-detail', {
      '../../../application/movies/get-detail': getDetailMovieApplicationStub,
    });

    const title = 'avenger';
    const year = 1994;
    const plot = 'long';
    const type = 'movie';

    const req = {
      query: {
        title,
        year,
        plot,
        type,
      },
    };

    const res = {
      send: resSendStub,
    };

    await getDetailMovieControllerStub(req, res);

    expect(getDetailMovieApplicationStub).calledOnceWith(title, year, plot, type);
    expect(res.send).calledOnceWith({
      status: 200,
      message: null,
      data: getDetailResponse,
    });
  });

  afterEach(() => {
    delete process.env.MOVIE_API_KEY;
  });
});
