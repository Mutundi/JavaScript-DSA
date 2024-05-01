//A script to check two given integer values and return true if one of the numbers is 15 or if their sum or difference is 15.

const testNumbers = (num1, num2) => {
    //Return true if one of the numbers is 15.
    if (num1 === 15 || num2 === 15) {
        return true;
    }

    //Return true if their sum or difference is 15.
    if ((num1 + num2 === 15) || (Math.abs(num1 - num2) === 15)) {
        return true;
    }

    //Does not satisfy the conditions.
    return false;
};

//Test the function.

console.log(testNumbers(15, 20));
console.log(testNumbers(10, 10));
console.log(testNumbers(25, 10));
console.log(testNumbers(10, 5));
console.log(testNumbers(5, 5))