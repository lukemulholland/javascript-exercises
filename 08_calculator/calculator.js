const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

// Sum elements in an array
const sum = function(arr) {
  return arr.reduce((total, current) => total + current, 0);
};

// Multiply elements in an array
const multiply = function(arr) {
  return arr.reduce((total, current) => total * current, 1);
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(a) {
	return a!==0 ? a * factorial(a-1) : 1;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
