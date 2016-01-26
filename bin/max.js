'use strict';

const ins = require('../lib/ins.js');

const max = ins.max;

let answer = max(7, 4, 11);

console.log(`max(7 , 4, 11) === ${answer}`);

answer = max (17, 4, 11, 27);
