const reverseString = function(string) {
    let stringReversed = [];
    for(let i = 0; string.length >= i; i++){
        stringReversed.push(string.charAt(string.length-i));
    }
    return stringReversed.join('');
};

// Do not edit below this line
module.exports = reverseString;
