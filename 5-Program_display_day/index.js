//A program to display the current day and time.

const today = new Date();
const day = today.getDay();
const daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

console.log("Today is " + daylist[day] + ".");

let hour = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();

let period = (hour >= 12) ? " PM" : " AM";

hour = (hour >= 12) ? (hour - 12) : hour;

if (hour === 0 && period === "PM") {
    if (minutes === 0 && seconds === 0) {
        hour = 12;
        period = " Noon";
    }
}


if (hour === 0 && period === " AM") {
    if (minutes === 0 && seconds === 0) {
        hour = 12;
        period = " Midnight";
    }
}

console.log("Current time: " + hour + period + ":" + minutes + ":" + seconds);