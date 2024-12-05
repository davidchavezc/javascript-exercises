const repeatString = function(string, num) {
    if(0 > num){
        return 'ERROR';
    }
    let repeatedString = '';
    for(let i = 0; num > i; i++){
        repeatedString+=string;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
