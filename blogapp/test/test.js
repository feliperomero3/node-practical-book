const { expect } = require('chai');

// https://mochajs.org/#getting-started
describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      expect([1, 2, 3].indexOf(4)).to.equal(-1);
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
      expect(Array.isArray(current)).to.be.true; // jshint ignore:line
    });
    it('should return the same array', () => {
      expect(expected.length).to.equal(current.length, `${expected.length} is not equal to ${current.length}`);
      for (let i = 0; i < expected.length; i++) {
        expect(expected[i]).equal(current[i], `${i} element is not equal`);
      }
    });
  });
});
