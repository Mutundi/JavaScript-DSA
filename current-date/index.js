//A script that displays the current date in different formatsgit.

const today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1;
const year = today.getFullYear();

if (day < 10) {
    day = "0" + day;
}

if (month < 10) {
    month = "0" + month;
}

console.log(day + "-" + month + "-" + year);
console.log(day + "/" + month + "/" + year);
console.log(month + "-" + day + "-" + year);
console.log(month + "/" + day + "/" + year);