'use-strict';

const fp = module.exports = {};

fp.map = (array, args) => {
  if(Array.isArray(array)) {
    return Array.prototype.map.call(array, args);
  } else {
    return 'We were expecting an array.';
  }
};

fp.filter = (array, args) => {
  if(Array.isArray(array)) {
    return Array.prototype.filter.call(array, args);
  } else {
    return 'We were expecting an array.';
  }
};

fp.reduce = (array, args) => {
  if(Array.isArray(array)) {
    return Array.prototype.reduce.apply(array, args);
  } else {
    return 'We were expecting an array.';
  }
};

fp.concat = (array, args) => {
  if(Array.isArray(array)) {
    return Array.prototype.concat.apply(array, args);
  } else {
    return 'We were expecting an array.';
  }
};

fp.splice = (array, args) => {
  if(Array.isArray(array)) {
    return Array.prototype.splice.call(array, args);
  } else {
    return 'We were expecting an array.';
  }
};
