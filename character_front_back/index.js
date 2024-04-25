//A script that adds the first character at the front and end of a given string.
//It should return an empty string, if string is empty.

const addFirstCharToFrontAndEnd = (str) => {
    if (str.length === 0 ) {
        return str;
    }

    const firstChar = str[0];

    return (firstChar + str + firstChar);
};

//Test the function.
console.log(addFirstCharToFrontAndEnd("Man"));