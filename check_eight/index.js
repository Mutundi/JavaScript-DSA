//A script to check from two given integers whether either of them is 8 or their sum or difference is 8.

const checkFor8 = (num1, num2) => {
    if (num1 === 8 || num2 === 8) {
        return true;
    }

    if (num1 + num2 === 8 || Math.abs(num1 - num2) === 8) {
        return true;
    }

    return false;
};

//Test the function.
console.log(checkFor8(20, 12));
console.log(checkFor8(20, 10));
console.log(checkFor8(10, 8));
console.log(checkFor8(5, 3));
console.log(checkFor8(9, 9));