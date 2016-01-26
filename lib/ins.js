'use strict';
//
const product = function product() {
  let args = arguments[0] instanceof Array ? arguments[0] : arguments;  // args = arguments[0] instanceof Array ?
  let answer = args[0];

  // arguments is an "array-like" object
  // so it has a length property and responds to the [] operator
  for (let i = 1; i < args.length; i++) {
    answer *= args[i];
  }

  return answer;
};


//
const max = function max() {
  let answer = arguments[0];

  for (let i = 1; i < arguments.length; i++) {
    // 1) i = 1(index#), test condition: 1 < 3(index length) = true, go inside{}
    // 2) i = 2(index#), test condition: 2 < 3(index length) = true, go inside{}

    if (answer < arguments[i]) {
    // 1) if, answer = argument[o](index 0) = 7, arguments[i] = (index 1) = 4;
    // therefore, answer > arguments[1] (7 > 4), the statement is false.
    // exit the if statement and back to for loop
    // in for loop I value increment by 1, = 2(index # 2)
    // 2) if, answer = argument[o](index 0) = 7, arguments[i] = (index 2) = 11;

      answer = arguments[i]; // comparing 7 and 4;
    }
  }
  return answer;
};


//
const arrayTimes2 = function arrayTimes2(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
};


// formal parameter.
const addProperty = function addProperty(obj, name, value) {
  // `object.name` <-> (equivalent to) `object['name']`
  // `object.name` is a short hand for `object['name']`
  // `object.name` !== `object['name']`
  if (typeof obj[name] === 'undefined') {
    obj[name] = value;
    name += 's';
    return true;
  }
  return false;

};


//
const transform = function transform(value, predicate, mutator) {
  // to invoke a function type: predicate()
  if (predicate(value)) {
    return mutator(value);
  }
  return value;
};


//
const arrayTransform = function arrayTransform(array, transform) {
  for (let i = 0; i < array.length; i++) {
    array[i] = transform[i]();
  }

};


module.exports = {
  product,
  max,
  arrayTimes2,
  addProperty,
  transform,
  arrayTransform,
};
