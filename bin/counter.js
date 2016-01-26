'use strict';

const counterFactory = require('../lib/outs.js').counterFactory;

let counterOne = counterFactory();  // return a function
let counterTwo = counterFactory();
let counterThree = counterFactory();

let countOne = counterOne();        // call a function
console.log('countOne:', countOne);

countOne = counterOne();

console.log('countOne:', countOne);

countOne = counterOne();
console.log('countOne:', countOne);

let countTwo = counterTwo();
console.log('countTwo:', countTwo);

let countThree = counterThree();
console.log('countThree:', countThree);

countOne = counterThree();
console.log('countOne:', countOne);




/*
OUTPUT:

countOne: 0
countOne: 1
countOne: 2
countTwo: 0
counterThree: 0
countOne: 3
*/
