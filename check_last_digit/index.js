//A script that checks if the last digit of three given positive integers is same.

const checkLastDigit = (num1, num2, num3) => {
    //Check if the numbers are greater than 0
    if (num1 > 0 && num2 > 0 && num3 > 0) {
        //Extract the last digit of every number.
        const lastDigit1 = num1 % 10;
        const lastDigit2 = num2 % 10;
        const lastDigit3 = num3 % 10;

        //Check if the three digits are equal.
        if(lastDigit1 === lastDigit2 && lastDigit2 === lastDigit3){
            return true;
        }else{
            return false;
        }
    }else{
        //If at least one number is not greater than 0.
        return false;
    }
};

//Test the function.
const num1 = 100;
const num2 = 125;
const num3 = 50;

if (checkLastDigit(num1, num2, num3)) {
    console.log("The last digits of the three numbers are same.")
}else{
    console.log("The last digits of the three numbers are different or at least one number is not greater than 0.")
}


