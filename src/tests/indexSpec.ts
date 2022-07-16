import app from '../index';
import supertest from 'supertest';
import fs from 'fs';
import path from 'path';

const request = supertest(app);

describe('Test main (/api) endpoint response', () => {
  it('To verify express app is working or not', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });
});

describe('Test image processing api', () => {
  it('It should return 500 status code error if any of the mandatory parameters are not set properly', async () => {
    const response = await request.get('/api/images');
    expect(response.status).toBe(500);
    expect(response.text).toBe(
      'filename, width and height are mandatory query parameters. Please set these 3 parameter with values and hit the api again'
    );
  });

  it('It should return 404 not found error, when there is no file', async () => {
    const fileName = 'fjor';
    const response = await request.get(
      `/api/images?filename=${fileName}&width=200&height=200`
    );
    expect(response.status).toBe(404);
    expect(response.text).toBe(
      `${fileName} does not exist in server. Please check the file name`
    );
  });

  it('It should resize the requested image, if all parameters set properly in request', async () => {
    await request.get('/api/images?filename=fjord&width=200&height=200');
    const filePath = path.join(
      __dirname,
      '../../public/thumbImages',
      'fjord-200-200-thumb.jpg'
    );
    expect(fs.existsSync(filePath)).toBeTrue();
  });
});
