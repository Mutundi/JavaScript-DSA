//A script to check if two numbers are in range 40..60 or in range 70..100 inclusive.

const inRange = (num1, num2) => {
    if ((num1 >= 40 && num1 <= 60 || num1 >= 70 && num1 <= 100) && 
        (num2 >= 40 && num2 <= 60 || num2 >= 70 && num2 <=100)) {
            return true;
        }else{
            return false;
        }
};

//Test the function.   
console.log(inRange(45, 80));
console.log(inRange(65, 85));