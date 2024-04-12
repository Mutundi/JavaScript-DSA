//A JavaScript function that calculates the area of a triangle.
//The function will use Heron's formula.

//The function accepts three parameters.
const calculateTriangleArea = (sideOne, sideTwo, sideThree) => {
    const semiPerimeter = (sideOne + sideTwo + sideThree) / 2;
    const triangleArea = Math.sqrt(semiPerimeter * ((semiPerimeter - sideOne) * (semiPerimeter - sideTwo) * (semiPerimeter - sideThree)));
    return triangleArea;
};

//Testing the function
const sideOne = 15;
const sideTwo = 25;
const sideThree = 30;

const area = (calculateTriangleArea(sideOne, sideTwo, sideThree)).toFixed(2);
console.log(area);
