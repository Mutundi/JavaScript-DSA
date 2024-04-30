//A script that checks if two or all three positive integers given have the same rightmost digit.

const haveSameRightmostDigit = (num1, num2, num3) => {
    const rightmostDigit1 = num1 % 10;
    const rightmostDigit2 = num2 % 10;
    const rightmostDigit3 = num3 % 10;

    return (rightmostDigit1 === rightmostDigit2 ||
        rightmostDigit1 === rightmostDigit3 || 
        rightmostDigit2 === rightmostDigit3);
};

//Test function.
console.log(haveSameRightmostDigit(10, 20, 30));
console.log(haveSameRightmostDigit(25, 20, 28));
console.log(haveSameRightmostDigit(45, 60, 95));