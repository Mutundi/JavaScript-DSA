//A script to check if two given numbers are in range 40..60 or in range 70..100 inclusive.
//Both integers should satisfy the condition for the function to return true.

const numbersRange = (num1, num2) => {
    if ((num1 >= 40 && num1 <= 60 || num1 >= 70 && num1 <= 100) && 
    (num2 >= 40 && num2 <= 60 || num2 >= 70 && num2 <= 100)) {
        return true;
    }
    return false;
};

//Test the function.
console.log(numbersRange(30, 50));
console.log(numbersRange(60, 80));
console.log(numbersRange(90, 50));