//A script that checks if a given string contains 2 to 4 occurrences of a specified character.

//Define a function that takes two parameters
//Declare a count variable
//Use a for loop to iterate through each character.
//check if the current character matches the specified character, increment count if it does.
//check if count is in the range 2..4 inclusive.

const containsSpecifiedCharacter = (str, char) => {
    //Declare a count variable to keep track of the number of occurrences of the specified character.
    let count = 0;

    //Use a for loop to iterate through each character in a given string.
    for(let i = 0; i < str.length; i++) {
        //Check if the current character in the string matches the specified character.
        if(str[i] === char){
            //Increment count if the character matches.
            count++;
        }
    }
    //Check if count is in the range 2..4 inclusive.
    return (count >= 2 && count <= 4);
};

//Test the function.
const specifiedString = 'Nyabwere';
const specifiedChar = 'e';

if (containsSpecifiedCharacter(specifiedString, specifiedChar)){
    console.log(`The string '${specifiedString}' contains 2 to 4 occurrences of the character '${specifiedChar}'.`);
}else{
    console.log(`The string '${specifiedString}' does not contain 2 to 4 occurrences of the character '${specifiedChar}'.`)
}