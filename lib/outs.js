'use strict';

const createArray = function createArray() {

  // return a new array when `return[]` is an empty array
  return []; // equivalent to `return new Array();`
};

const createPerson = function createPerson(givenName, sureName, bornOn, height, weight, eyeColor) {
  return {
    givenName,
    sureName,
    bornOn,
    height,
    weight,
    eyeColor,
  };
};

const counterFactory = function counterFactory() { // countFactory is called
  let count = 0;        // number assigned to the function
  return function() {   // allow the function to refernce a variable
    return count+=1;
  };
};

module.exports = {
  createPerson,
  createArray,
  counterFactory,
};
