//A script that creates a new string with first three characters are in lowercase from a given string.

const modifyString = (inputString) => {
    if(inputString.length < 3) {
        //Check if the string is less than 3, if true convert the string to upper case.
        return inputString.toUpperCase();
    }else{
        //Extract the first 3 characters of the string, and convert them to lower case.
        const firstThreeChar = inputString.substring(0, 3).toLowerCase();

        //Extract the rest of the string.
        const backPartChar = inputString.substring(3, inputString.length);

        //Concatenate the two parts, modified front part and the back part to make a new string.
        return (firstThreeChar + backPartChar);
    }
};


//Test the function.
const input1 = "MOtegandi";
const input2 = "ok";
const input3 = "NYABWERE";

console.log(modifyString(input1));
console.log(modifyString(input2));
console.log(modifyString(input3));