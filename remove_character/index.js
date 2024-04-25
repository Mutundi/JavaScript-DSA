//A script that removes a character at the specified position of a given string and returns the new string.

const removeCharacter = (str, position) => {
    if (position < 0 || position >= str.length) {
        return "Invalid position."
    }
    
    const newString = str.slice(0, position) + str.slice(position + 1, str.length);
    return newString;
};

//Test the function.
console.log(removeCharacter("JavaScript", 5));
console.log(removeCharacter("man", 2));
console.log(removeCharacter("Motegandi", 4));
console.log(removeCharacter("Yoel", 3));