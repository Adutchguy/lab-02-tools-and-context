'use-strict';

const methods = module.exports = {};

methods.map = (array, args) => {
  if(Array.isArray(array)) {
    return Array.prototype.map.call(array, args);
  } else {
    return 'We were expecting an array.';
  }
};

methods.filter = (array, args) => {
  if(Array.isArray(array)) {
    return Array.prototype.filter.call(array, args);
  } else {
    return 'We were expecting an array.';
  }
};

methods.reduce = (array, args) => {
  if(Array.isArray(array)) {
    return Array.prototype.reduce.apply(array, args);
  } else {
    return 'We were expecting an array.';
  }
};

methods.concat = (array, args) => {
  if(Array.isArray(array)) {
    return Array.prototype.concat.apply(array, args);
  } else {
    return 'We were expecting an array.';
  }
};

methods.splice = (array, args) => {
  if(Array.isArray(array)) {
    return Array.prototype.splice.call(array, args);
  } else {
    return 'We were expecting an array.';
  }
};
