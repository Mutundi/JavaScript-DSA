//A script that checks if 'Script' presents at the 5th (index 4) position in a given string.
//If 'Script' presents in the string return string without 'Script' otherwise return the original one.

const checkAndRemoveScript = (str) => {
    //Check if 'Script' is found at the 5th position.
    if (str.substring(4, 10) === "Script") {
        //If 'Script' is found return string without 'Script'
        return str.substring(0, 4) + str.substring(10);
    }else{
        //If 'Script' is not found, the original string.
        return str;
    }
};

//Test the function.

console.log(checkAndRemoveScript("JavaScript"));
console.log(checkAndRemoveScript("coffeeScript"));
console.log(checkAndRemoveScript("TypeScript"))
console.log(checkAndRemoveScript("MyScript"))