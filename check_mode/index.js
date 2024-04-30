//A script to check whether three given integers are increasing in strict mode or soft mode.

const checkIncreasingMode = (num1, num2, num3) => {
    if (num1 < num2 && num2 < num3) {
        return "Strict Mode";
    }else if (num1 <= num2 || num2 <= num3){
        return "Soft Mode";
    }

    return "Unknown Mode";
};

//Test the function.
console.log(checkIncreasingMode(1, 2, 3));
console.log(checkIncreasingMode(10, 10, 20));
console.log(checkIncreasingMode(50, 30, 20));