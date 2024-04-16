//This is a script to calculate the number of days left until next christmas.

//Logic:
//1. Get today's date.
//2. Get the current year.
//3. Create a new Date object for christmas of the current year.
//4. If christmas has already passed this year, calculate for next year.
//5. Calculate the difference in time in milliseconds between christmas and today.
//6. Convert the time difference from milliseconds to days.

const daysUntilChristmas = () => {
    const today = new Date();
    const currentYear = today.getFullYear();
    let christmas = new Date(currentYear, 11, 25);

    if (today > christmas) {
        christmas.setFullYear(currentYear + 1);
    }

    const timeDifference = christmas.getTime() - today.getTime();
    const daysLeft = Math.ceil(timeDifference / (1000 * 3600 * 24));

    return daysLeft;
};

//Test the function.
const daysLeftToChristmas = daysUntilChristmas();
console.log(`We have ${daysLeftToChristmas} days left before christmas.`); 