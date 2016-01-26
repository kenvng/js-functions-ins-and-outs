'use strict';

const ins = require('../lib/ins.js');
const addProperty = ins.addProperty;

const person = {
  giveName: 'Henry',
  sureName: 'Rollins',
  bornOn: '1961-02-13',
};

console.log(person);
if (addProperty(person, 'height', 69)) {
  console.log(person);
}
else {
  console.log('couldn\'t add property "Height"');
}
