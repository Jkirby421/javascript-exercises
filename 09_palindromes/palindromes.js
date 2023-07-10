const palindromes = function (word) {
word = word.toLower();
let reverse = word.split("").reverse().join("");
if (word === reverse) return true;
return false;
};

// Do not edit below this line
module.exports = palindromes;
