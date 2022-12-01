const request = require('supertest');
const app = require('../app.js');
const expect = require('expect.js');

describe('server', () => {
  describe('homepage', () => {
    it('should respond to GET', async () => {
      const res = await request(app).get('');
      expect(res.statusCode).to.be(200);
    });
  });
});
