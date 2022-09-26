const repeatString = function (var1, var2) {
  let var3 = "";
  if (var2 >= 0) {
    for (let i = 0; i < var2; i++) {
      var3 += var1;
    }
    return var3;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = repeatString;
