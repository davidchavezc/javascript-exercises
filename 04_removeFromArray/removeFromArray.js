const removeFromArray = function(array) {
    for(let i = 0; arguments.length > i; i++){
        for(let j = 0; array.length > j; j++){
            if(array[j]===arguments[i]){
                let toRemoveIndex = array.indexOf(arguments[i]);
                array.splice(toRemoveIndex,1);
                j--;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
