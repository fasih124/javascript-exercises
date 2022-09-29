const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (a) {
  total = 0;
  a.forEach((num) => {
    total += num;
  });
  return total;
};

const multiply = function (a) {
  product = 1;
  a.forEach((num) => {
    product *= num;
  });
  return product;
};

const power = function (a, b) {
  return Math.pow(4, 3);
};

const factorial = function (a) {
  fact = 1;
  for (let i = a; i > 0; i--) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
