//A function to calculate whether a given year is a leap year or not.

const isLeapYear = (year) => {
    //Step 1: Check if year is evenly divisible by 4, if yes go to step 2. Otherwise, it is not a leap year.
    if (year % 4 === 0) {
        //Step 2: Check if year is evenly divisible by 100, if it is go to step 3. Otherwise, it is a leap year.
        if (year % 100 === 0) {
            //Step 3: Check if year is evenly divisible by 400, if yes it is a leap. Otherwise, it is not.
            if (year % 400 === 0) {
                return true; //It is a leap year.
            }else{
                return false; //It is not a leap year.
            }
        }else{
            return true; //It is a leap year.
        }
    }else{
        return false; //It is not a leap year.
    }
};

//Test the function.
console.log(isLeapYear(2100));
console.log(isLeapYear(2000));
console.log(isLeapYear(1900));
console.log(isLeapYear(2008));