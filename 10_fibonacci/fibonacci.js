const fibonacci = function(number) {

number = Number(number);
let fib = 0; 
if (number < 0) {
    return "OOPS";
}
if (number < 2) {
    return number;
}

else {
    fib = fibonacci(number - 1) + fibonacci(number -2);
}

return fib;
};

// Do not edit below this line
module.exports = fibonacci;
