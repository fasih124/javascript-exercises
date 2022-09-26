const ftoc = function (f) {
  let reslut = (f - 32) * (5 / 9);
  return Math.round(reslut * 10) / 10;
};

const ctof = function (c) {
  let reslut = c * (9 / 5) + 32;
  return Math.round(reslut * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
//
