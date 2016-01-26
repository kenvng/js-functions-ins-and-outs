'use strict';

const ins = require('../lib/ins.js');

const transform = ins.transform;

const isHeightInches = function(height) {
  return height < 110;
};

const incheseToCentimeters = function(inches) {
  return inches * 2.54;
};

let height = 69;

console.log(height);
height = transform(height, isHeightInches, incheseToCentimeters);
console.log(height);

/*
OUTPUT:
69
175.26
*/
