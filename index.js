'use strict';

var morph = module.exports = function (obj, rules) {
  rules = rules || {};

  if (!isObject(obj)) {
    throw new Error('First argument is no object.');
  }

  if (!isObject(rules)) {
    throw new Error('Second argument is no object.');
  }

  var result = {};

  Object.keys(obj).forEach(function (key) {
    var attr = rules.hasOwnProperty(key) ? rules[key] : key;

    result[attr] = obj[key];
  });

  return result;
};

morph.swapKey = function (obj, source, target) {
  if (obj.hasOwnProperty(source)) {
    var originalValue = obj[source];

    obj[target] = originalValue;
    delete obj[source];
  }

  return obj;
};

function isObject (obj) {
  return (obj === Object(obj)) && !(obj instanceof Array);
}
