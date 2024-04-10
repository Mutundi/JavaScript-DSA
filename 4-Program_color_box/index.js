//A function to change the color of the text box if empty string is submitted.

//This function changes the color of a text box and calls "addText" and "clearInput()";
const changeColor = () => {
    const textInput = document.getElementById("text-one").value;

    if (textInput.length > 0) {
        document.getElementById("text-one").style.borderColor = "green";
        //document.getElementById("text-one").style.borderRadius = "5%"

        addText();
        clearInput();

        return;
    }

    if (textInput === "") {
        document.getElementById("text-one").style.borderColor = "red";
        //document.getElementById("text-one").style.borderRadius = "5%";
}
};

//A function to clear the text box when the value is submitted.
const clearInput = () => {
    document.getElementById("text-one").value = "";
};

//A function to add a text to the division.
const addText = () => {
    const textOne = document.getElementById("text-one").value;
    const textTwo = document.getElementById("div-one");

    textTwo.innerHTML = textOne;
}