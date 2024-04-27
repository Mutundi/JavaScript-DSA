//A script to check if a string starts with "Java".
//Return false if otherwise.

const startsWithJava = (str) => {
    if (str.length < 4) {
        return false;
    }

    const front = str.substring(0, 4);

    return (front === "Java" ? true : false);
};

//Test the function.
console.log(startsWithJava("JavaScript"));
console.log(startsWithJava("Jupiter"));
console.log(startsWithJava("Java"));