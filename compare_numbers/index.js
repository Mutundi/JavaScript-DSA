//A script to check from three given integers whether a number is greater than or equal to 20 and less than one of the others.

const checkNumbers = (num1, num2, num3) => {
    if((num1 >= 20 && num1 < (num2 || num1 < num3)) ||
    (num2 >= 20 && num2 < (num1 || num2 < num3)) ||
    (num3 >= 20 && num3 < (num1 || num3 < num2))) {
        return true;
    }else{
        return false;
    }
};

//Test the function.

console.log(checkNumbers(20, 30, 50));
console.log(checkNumbers(15, 10, 15));
console.log(checkNumbers(30, 40, 60));