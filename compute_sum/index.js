//A script to calculate the sum of two numbers, and check the range of the sum.


const computeSum = (num1, num2) => {
    const sumNum = num1 + num2;

    if (sumNum >= 50 && sumNum <= 80) {
        return 65;
    }else{
        return 80;
    }
};

//Test the function.

console.log(computeSum(30, 40));
console.log(computeSum(20, 20));
console.log(computeSum(40, 20));