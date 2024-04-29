//A script that finds a value nearest to 100 from two different given integers.

const nearestTo100 = (num1, num2) => {
    const target = 100;

    //Calculate the absolute difference between each number and the target.
    const diff1 = Math.abs(num1 - target);
    const diff2 = Math.abs(num2 - target);

    //Compare the absolute difference and return the number with the smallest difference.
    if (diff1 < diff2) {
        return num1;
    }else if (diff2 < diff1) {
        return num2;
    }else{
        //if both differences are equal return any number.
        return num1;
    }
};

//Test the function.
const num1 = 80;
const num2 = 125;

const nearest = nearestTo100(num1, num2);
console.log("The number nearest to 100 is: " + nearest);