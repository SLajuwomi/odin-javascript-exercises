const palindromes = function (string) {
  let cleanString = string.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g, "");
  let j = cleanString.length - 1;
  for (let i = 0; i < cleanString.length / 2; i++) {
    if (cleanString[i] != cleanString[j]) {
      return false;
    }
    j--;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
