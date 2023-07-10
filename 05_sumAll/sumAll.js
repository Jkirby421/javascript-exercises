const sumAll = function(num1, num2) {
let startNum = 0;
let endNum = 0;
if (num1 < 0 || num2 < 0){
    return "ERROR";
}

else if (!Number.isInteger(num1)|| !Number.isInteger(num2)){
    return "ERROR";
}

else if (num1 > num2){
    startNum = num1;
    endNum = num2;
}
else if (num2 > num1){
    startNum = num2;
    endNum = num1;
}
else {
    return num1;
}

for (let i = startNum-1; i >= endNum; i--){
    startNum += i;
}
return startNum;

}

// Do not edit below this line
module.exports = sumAll;
