//A script to create a new string, with first three characters in lowercase from a given string.
//If the string length is less than 3, convert all the characters into uppercase.

const upperLower = (str) => {
    if (str.length < 3) {
        return str.toUpperCase();
    }else{
        const frontSide = str.substring(0, 3).toLowerCase();
        const backSide = str.substring(3, str.length);
        
        return frontSide + backSide;
    }
};

//Test the function.
console.log(upperLower("PYthon"));
console.log(upperLower("ml"));
console.log(upperLower("JAVaScript"));