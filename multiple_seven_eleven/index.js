//A script that checks two given positive integers whether one of the number (not both) is multiple of 7 or 11.


const checkMultiples = (num1, num2) => {
    //Check if the numbers are positive integers.
    if(num1 > 0 && num2 > 0) {
        //Check whether the numbers are a multiple of 7 or 11.
        const isMultipleOf7Or11 = (num) => {
            return (num % 7 === 0 || num % 11 === 0);
        };
        
        const isNum1Multiple = isMultipleOf7Or11(num1);
        const isNum2Multiple = isMultipleOf7Or11(num2);

        return (isNum1Multiple && !isNum2Multiple) || (!isNum1Multiple && isNum2Multiple);
    }else{
        return "Input values should be greater than 0."
    }
};

//Test the function.

console.log(checkMultiples(10, 12));
console.log(checkMultiples(-14, -7));
console.log(checkMultiples(21, 30));
console.log(checkMultiples(35, 77));
console.log(checkMultiples(70, 90));