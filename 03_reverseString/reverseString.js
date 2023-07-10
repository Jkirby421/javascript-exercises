const reverseString = function(text) {
if (text === ""){
    return "";
}

let reverse = text.slice(text.length-1);
for (let i = text.length - 2; i >= 0; i--){
reverse += text.slice(i, (i+1));
}
return reverse;
};

// Do not edit below this line
module.exports = reverseString;
