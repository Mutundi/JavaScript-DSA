//A function that swap two strings.

const swap = () => {
    const textOne = document.getElementById("text-one").value;
    const textTwo = document.getElementById("text-two").value;

    document.getElementById("text-one").value = textTwo;
    document.getElementById("text-two").value = textOne;
};