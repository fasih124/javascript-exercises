const sumAll = function (num1, num2) {
  let sum = 0;
  if (
    num1 < 0 ||
    num2 < 0 ||
    typeof num1 != "number" ||
    typeof num2 != "number"
  ) {
    return "ERROR";
  }

  let max = num1;
  let min = num1;
  if (max < num2) {
    max = num2;
  }
  if (min > num2) {
    min = num2;
  }

  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};
// Do not edit below this line
module.exports = sumAll;
