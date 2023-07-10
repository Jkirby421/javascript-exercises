const repeatString = function(words,times) {
    if (times < 0){
        return "ERROR"
    } 
    let sting = "";
    for (let i = 0; i < times; i++){
        sting+=words;
    }
    return sting;
    };

// Do not edit below this line
module.exports = repeatString;
