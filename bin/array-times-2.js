'use strict'

const ins = require('../lib/ins.js');
const arrayTimes2 = ins.arrayTimes3;
const arrayTransform = ins.arrayTransform;
const transform = function(arg) {
  return arg/2;
};
let array = [2, 4, 6];
arrayTimes2(array);
console.log(array);
arrayTransform(array, transform);
console.log(array);
