//A script to compute the absolute difference between a specified number and 19.
//Returns triple their absolute difference if the specified number is greater than 19.

const absoluteDifference = (m) => {
    if (m <= 19) {
        return (19 - m);
    }else{
        return (m - 19) * 3;
    }
};

//Test the function.
console.log(absoluteDifference(15));
console.log(absoluteDifference(19));
console.log(absoluteDifference(24));