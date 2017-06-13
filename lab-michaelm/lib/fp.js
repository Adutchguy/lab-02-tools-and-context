'use-strict';

const methods = module.exports = {};

methods.map = (array, args) => {
  if(Array.isArray(array)) {
    return Array.prototype.map.call(array, args);
  } else {
    return 'We were expecting an array.';
  }
};
