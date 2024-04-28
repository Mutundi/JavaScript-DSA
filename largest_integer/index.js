//A script that finds the largest of three integers given.

const findLargest = (a, b, c) => {
    if(a >= b && a >= c) {
        return a;
    }else if(b >= a && b >= c) {
        return b;
    }else{
        return c;
    }
};

//Test the function.
const num1 = 10;
const num2 = 20;
const num3 = 30;

const largest = findLargest(num1, num2, num3);
console.log("The largest number is: ", largest);