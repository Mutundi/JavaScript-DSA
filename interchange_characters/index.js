//A script that interchanges the first and last characters in a given string.
//If the string is less than or equal to 1, the same string should be returned.

const changeFirstLast = (str) => {
    if (str.length <= 1) {
        return str;
    }
    const firstChar = str[0];
    const lastChar = str[str.length - 1];
    const middleCharacters = str.substring(1, str.length - 1);

    return (lastChar + middleCharacters + firstChar);
};

//Test the function.
console.log(changeFirstLast("How"));