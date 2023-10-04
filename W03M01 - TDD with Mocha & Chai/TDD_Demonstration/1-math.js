
function addTwoNumbers(num1, num2){
    if(typeof(num1) !== 'number' || typeof(num2) !== 'number'){
        return 'The values cannot be added';
    }
    return num1 + num2;
}

function addNumbersInArray(numbers){
    let result = 0;
    for(let i = 0; i < numbers.length; i ++){
        result += numbers[i];
    }
    return result;
}

function isOdd(num){
    if(Number.isInteger(num)){
        if(num % 2 === 0){
            return false;
        }
        return true;
    }
    
    if(Array.isArray(num)){
        for(let i = 0; i < num.length; i ++){
            if(num[i] % 2 === 0){
                return false;
            }
        }
        return true;
    }
    return null;


}

module.exports = {
    addTwoNumbers,
    addNumbersInArray,
    isOdd
}