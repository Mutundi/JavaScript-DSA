//A script to check two given numbers and return true if one of the number is 50 or if their sum is 50.

const checkNumbers = (m, n) => {
    return (m === 50 || n === 50 || m + n === 50);
};

//Test function
console.log(checkNumbers(20, 30));
console.log(checkNumbers(30, 30));
console.log(checkNumbers(50, 10));
console.log(checkNumbers(25, 25));