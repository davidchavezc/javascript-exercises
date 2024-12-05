const sumAll = function(inputNum1, inputNum2) {
    let sumCount = 0;
    if(0 > inputNum1 || 0 > inputNum2 ){
        return 'ERROR';
    }
    if(inputNum1%1!=0 || inputNum2%1!=0){
        return 'ERROR';
    }
    if(typeof(inputNum1)!='number' || typeof(inputNum2)!='number'){
        return 'ERROR';
    }
    if(inputNum1>inputNum2){
        startNum = inputNum2;
        endNum = inputNum1;
    }
    else{
        startNum = inputNum1;
        endNum = inputNum2;
    }
    for(let i = startNum; endNum >= i; i++){
        sumCount+=i;
    }
    return sumCount;
};

// Do not edit below this line
module.exports = sumAll;
