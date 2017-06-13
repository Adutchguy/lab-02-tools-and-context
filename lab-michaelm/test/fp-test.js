'use-strict';

const expect = require('expect');
const fp = require('../lib/fp.js');

const testArray1 = [1,2,3];
const testArray2 = [4,5,6];

describe('Testing fp.js tools.', () => {
  // begin map test code block
  describe('Testing map.', () => {
    // test1 begin
    it('Should return the array items multiplied by 2 in a new array.', () => {
      expect(fp.map(testArray1, n => n * 2)).toEqual([2,4,6]);
    });
    // test1 end
    // test2 begin
    it('Should return "We were expecting an array."', () => {
      expect(fp.map(null, null)).toEqual('We were expecting an array.');
    });
    // test2 end
  });
  // end map test code block
  // begin filter test code block
  describe('Testing filter', () => {
    // test1 begin
    it('Should return a new array containing array items greater than 1 in a new array', () => {
      expect(fp.filter(testArray1, n => {
        if (n > 1) {
          return n;
        }
      })).toEqual ([2,3]);
    });
    // test1 end
    // test2 begin
    it('Should return "We were expecting an array."', () => {
      expect(fp.filter(null, null)).toEqual('We were expecting an array.');
    });
    // test2 end
  });
  // end filter test code block
  // begin reduce test code block
  describe('Testing reduce', () => {
    // test1 begin
    it('Should sum up the values of an array starting at the defined value of 10.', () => {
      expect(fp.reduce(testArray1, [(a, b) => a + b, 10])).toEqual(16);
    });
    // test1 end
    // test2 begin
    it('Should return "We were expecting an array."', () => {
      expect(fp.reduce(null, null)).toEqual('We were expecting an array.');
    });
    // test2 end
  });
  // end reduce test code block
  // begin concat test code block
  describe('Testing concat', () => {
    // test1 begin
    it('Should take two arrays and combine them into one returned array', () => {
      expect(fp.concat(testArray1, testArray2)).toEqual([1,2,3,4,5,6]);
    });
    // test1 end
    // test2 begin
    it('Should return "We were expecting an array."', () => {
      expect(fp.concat(null, null)).toEqual('We were expecting an array.');
    });
    // test2 end
  });
  // end concat test code block
  // begin splice test code block
  describe('Testing splice', () => {
    // test1 begin
    it('Should change the contents of an array by removing existing elements.', () => {
      expect(fp.splice(testArray1, 2)).toEqual([3]);
    });
    // test1 end
    // test2 begin
    it('Should return "We were expecting an array."', () => {
      expect(fp.splice(null, null)).toEqual('We were expecting an array.');
    });
    // test2 end
  });
  // end splice test code block
});
