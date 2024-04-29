//A script that finds the larger number from two given integers.
//The two numbers are in range 40..60.

const findLargerNumber = (num1, num2) => {
    //Check if both numbers are within the range 40..60 inclusive.
    if ((num1 >= 40 && num1 <= 60) && (num2 >= 40 && num2 <= 60)) {
        //check if the numbers are equal.
        if(num1 === num2) {
            return "Both numbers are equal."
        }else{
            //Compare the two numbers and return the larger one.
            return (num1 > num2) ? num1 : num2;
        }
    }
    //if any of the numbers is not in the specified range return null.
    return null;
};

//Test the function.

const num1 = 20;
const num2 = 60;

const result = findLargerNumber(num1, num2);

if (result !== null) {
    if (typeof result === "string") {
        console.log(result);
    }else{
        console.log("The larger number is: ", result);
    }
}else{
    console.log("Both numbers must be in the range 40..60 inclusive.");
}

