const assert = require('assert');

// https://mochajs.org/#getting-started
describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal([1, 2, 3].indexOf(4), -1);
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
      assert(Array.isArray(current));
    });
    it('should return the same array', () => {
      assert.equal(expected.length, current.length, `arrays have equal length`);
      for (let i = 0; i < expected.length; i++) {
        assert.equal(expected[i], current[i], `i element is equal`);
      }
    });
  });
});
