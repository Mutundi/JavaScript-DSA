//A script to check if the last digit of three given positive integers is the same.

const lastDigitSame = (num1, num2, num3) => {
    const lastDigit1 = num1 % 10;
    const lastDigit2 = num2 % 10;
    const lastDigit3 = num3 % 10;

    return lastDigit1 === lastDigit2 && lastDigit2 === lastDigit3;
};

//Test the function.
const num1 = 234;
const num2 = 564;
const num3 = 724;

if (lastDigitSame(num1, num2, num3)) {
    console.log("The last digit of all three integers are same.");
}else{
    console.log("The last digit of all three integers are different.");
}