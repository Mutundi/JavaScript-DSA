//A script that creates a new string from a given string by taking the last three characters
//and adding them both at the front and back.
//The string should have a length of 3 or more.

const createNewString = (str) => {
    if(str.length < 3) {
        return "The string length must be three or more."
    }

    //Extract the last three characters.
    const lastThreeChars = str.slice(-3);

    //Concatenate the last three characters at the front and end of the string given.
    return (lastThreeChars + str + lastThreeChars);
};

//Test the function.
const inputString = "Motegandi";
const result = createNewString(inputString);

console.log("The original string: " + inputString)
console.log("The new string is: " + result)

