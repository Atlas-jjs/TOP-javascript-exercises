const sumAll = function(num1, num2) {
    let result = 0, startNum = 0, endNum = 0;

    // Validation for the parameters
    function isInt(num) {
        return (num % 1 === 0);
    }

    function isNumber(num) {
        return Number(num) === num;
    }

    if (num1 < 0 || num2 < 0 || 
        isInt(num1) === false || isInt(num2) === false || 
        isNumber(num1) === false || isNumber(num2) === false) {
        return 'ERROR';
    }

    if (num1 > num2) {
        startNum = num2;
        endNum = num1;
    } else {
        startNum = num1;
        endNum = num2;
    }

    for (let i = startNum; i <= endNum; i++) {
        result += i;
    }

    return result;
};

console.log(sumAll(1, 4));
console.log(sumAll(1, 4000));
console.log(sumAll(123, 1));
console.log(sumAll(-10, 4));
console.log(sumAll(2.5, 4));
console.log(sumAll(10, "90"));
console.log(sumAll(10, [90, 1]));

// Do not edit below this line
module.exports = sumAll;
