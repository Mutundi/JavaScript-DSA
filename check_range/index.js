//A script that checks if two given integers are in the range of 50..99 (inclusive).
//Return true if either of them are in the said range.

const checkRange = (m,n) => {
    if ((m >= 50 && m <= 99) || (n >= 50 && n <= 99)) {
        return true;
    }
    
    return false;
};

//Test the function.

console.log(checkRange(45, 60));
console.log(checkRange(30, 20));
console.log(checkRange(80, 95));
console.log(checkRange(50, 25));