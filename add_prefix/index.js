//A script to create a new string adding "Py" infront of a given string.
//If the given string starts with "Py" then return the original string.

const addPyPrefix = (str) => {
    if (str.substring(0, 2) === "Py") {
        return str;
    }else{
        return "Py" + str;
    }
};

//Test the funcion.
console.log(addPyPrefix("thon"));
console.log(addPyPrefix("jama"))
console.log(addPyPrefix("Python"));
console.log(addPyPrefix("ramid"));
console.log(addPyPrefix("Pythogras"));
