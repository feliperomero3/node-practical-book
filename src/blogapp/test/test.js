const expect = require('expect.js');

// https://mochajs.org/#getting-started
describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      expect([1, 2, 3].indexOf(4)).to.be(-1);
    });
  });
});

var current = [''];
var expected = ['a', 'b', 'c'];

describe('String', () => {
  describe('#split()', () => {
    beforeEach(() => {
      current = 'a,b,c'.split(',');
    });
    it('should return an array', () => {
      expect(current).to.be.an(Array);
    });
    it('should return the same array', () => {
      expect(expected).to.have.length(current.length);
      for (let i = 0; i < expected.length; i++) {
        expect(expected[i]).to.be(current[i]);
      }
    });
  });
});
