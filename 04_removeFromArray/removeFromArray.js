const removeFromArray = function (arr, ...key) {
  for (let i = 0; i < key.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === key[i]) {
        arr.splice(j, 1);
      }
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
