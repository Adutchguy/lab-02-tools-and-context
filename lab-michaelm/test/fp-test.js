'use-strict';

const expect = require('expect');
const fp = require('../lib/fp.js');

const testArray = [1,2,3];

describe('Testing fp.js tools.', () => {
  // begin test code block
  describe('Testing map.', () => {
    // test1 begin
    it('should return the array items multiplied by 2 in a new array.', () => {
      expect(fp.map(testArray, n => n * 2)).toEqual([2,4,6]);
    });
    // test1 end
    // test2 begin
    it('Should return "We were expecting an array."', () => {
      expect(fp.map(null, n => n * 2).toBe('We were expecting an array.'));
    });
    // test2 end
  });
  // end test code block
});
