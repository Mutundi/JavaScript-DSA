//A script that checks if a given positive number is a multiple of 3 or 7.
//If the number is less than or equal to 0, return false.

const isMultipleOfThreeOrSeven = (num) => {
    //Check if number is positive
    if(num <= 0) {
        return false;
    }

    if (num % 3 === 0 || num % 7 === 0) {
        return true;
    }else{
        return false;
    }
};

//Test the function.
const isNumber = 17;

if(isMultipleOfThreeOrSeven(isNumber)) {
    console.log(isNumber + " is a multiple of three or seven.")
}else{
    console.log(isNumber + " is not a multiple of three or seven.")
}
