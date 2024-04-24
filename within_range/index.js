//A script to check if a given integer is within 20 of 100 or 400.

const isWithinRange = (num) => {
    return ((Math.abs(100 - num) <= 20) || (Math.abs(400 - num) <= 20));
};

const num1 = 90;
const num2 = 115;
const num3 = 380;
const num4 = 250;
const num5 = 418;

//Test the function.
console.log(num1 + " is within 20 of 100 or 400: " + isWithinRange(num1));
console.log(num2 + " is within 20 of 100 or 400: " + isWithinRange(num2));
console.log(num3 + " is within 20 of 100 0r 400: " + isWithinRange(num3));
console.log(num4 + " is within 20 of 100 or 400: " + isWithinRange(num4));
console.log(num5 + " is within 20 of 100 or 400: " + isWithinRange(num5));