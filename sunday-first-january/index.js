// We will create a script that checks if the first day of January for a given year(2014 to 2060) 
// falls on a Sunday.

//Logic:
//1. Create a for loop to iterate over the years, 2014 to 2060.
//2. create a date object for the current year. 
//3. Select the month, and date for the current year.
//4. Create an if statement to confirm whether the first day of Januray is a Sunday,
//   you will use the month and date stored in the date object.
//5. If true print the year to the console.

const findFirstJanuarySunday = () => {
    for(let year = 2014; year <= 2060; year++) {
        const date = new Date(year, 0, 1);
        if(date.getDay() === 0) {
            console.log(`1st Januray ${year} falls on a Sunday.`);
        }
    }
};

//Test the function
findFirstJanuarySunday();