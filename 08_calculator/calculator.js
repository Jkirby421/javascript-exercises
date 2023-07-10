const add = function(num1, num2) {
	let total = num1 + num2;
  return total;
};

const subtract = function(num1, num2) {
	let total = num1 - num2;
  return total;
};

const sum = function(array) {
  let total = 0;
  array.forEach(number => total += number)
  return total;
};

const multiply = function(array) {
if (array[0] === 0){
  return 0;
}
let total = 1;
array.forEach(number => total*= number);
return total;
};

const power = function(base, power) {
	let total = base;
  for (let i = power; i > 1; i--){
    total *= base;
  }
  return total;
};

const factorial = function(num) {
	if (num == 0) return 1;
  return num * (factorial(num -1));
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
