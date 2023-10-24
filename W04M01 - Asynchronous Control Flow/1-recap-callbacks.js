// High order function
function doSomeMath(num1, num2, callbackOperation){
    console.log("Num 1:", num1);
    console.log("Num 2:", num2);
    return callbackOperation(num1, num2);
}

function multiplyNumbers(num1, num2){
    return num1 * num2;
}

let sumResult = doSomeMath(10, 20, (n1, n2) => n1 + n2);
console.log(sumResult);

let multiplyResult = doSomeMath(10, 20, multiplyNumbers);
console.log(multiplyResult);