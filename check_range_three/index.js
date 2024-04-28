//A script that checks if three given integers are in the range 50..99 (inclusive).
//Return true if one or more of them are in the range.

const checkRangeThree = (x, y, z) => {
    if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99) || (z >= 50 && z <= 99)) {
        return true;
    }

    return false;
};

//Test the function.

console.log(checkRangeThree(10, 20, 30))
console.log(checkRangeThree(60, 70, 80));
console.log(checkRangeThree(45, 65, 100));