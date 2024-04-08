//A function to add a text to a division,
//and clear the input field once it done.

const addText = () => {
    const inputText = document.getElementById("text-one").value;
    const outputText = document.getElementById("div-one");

    outputText.innerHTML = inputText;
    document.getElementById("text-one").value = "";
};