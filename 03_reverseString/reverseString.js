const reverseString = function (string) {
  const letters = string.split("");
  let characterLenght = letters.length - 1;
  let finalString = "";
  for (let i = characterLenght; i >= 0; i--) {
    finalString += letters[i];
  }
  return finalString;
};

// Do not edit below this line
module.exports = reverseString;
