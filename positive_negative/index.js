//A script to check if one of two given integers is positive and the other is negative.

const checkPositiveNegative= (num1, num2) => {
    return ((num1 >= 0 && num2 < 0) || (num1 < 0 && num2 >= 0)); 
};

//Test the function.
const num1 = 2;
const num2 = -3;
const num3 = 4;
const num4 = -4;

console.log(num1 + " and " + num4 + " have different signs: " + checkPositiveNegative(num1, num4));
console.log(num2 + " and " + num3 + " have different signs: " + checkPositiveNegative(num2, num3));
console.log(num1 + " and " + num3 + " have different signs: " + checkPositiveNegative(num1, num3));
console.log(num2 + " and " + num4 + " have different signs: " + checkPositiveNegative(num2, num4));