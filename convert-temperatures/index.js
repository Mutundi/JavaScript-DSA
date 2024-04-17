//A script that converts temperatures to and from Celsius and Fahrenheit.

//Logic:
//1. Define a function 'celsiusToFahrenheit()' to convert temperatures from Celsius to Fahrenheit.
//2. Inside the function 'celsiusToFahrenheit()' calculate the temperature in Fahrenheit use '(Celsius * 9/5) + 32', then return Fahrenheit. 
//3. Define a function 'fahrenheitToCelsius()' to convert temperatures from Fahrenheit to Celsius.
//4. Inside the function 'fahrenheitToCelsius()' calculate the temperature in Celsius use '(fahrenheit + 32) * 5/9', then return celsius.
//5. Test the functions.

const celsiusToFahrenheit = (celsius) => {
     let fahrenheit = (celsius * 9/5) + 32;
     return fahrenheit;
};

const fahrenheitToCelsius = (fahrenheit) => {
    let celsius = (fahrenheit + 32) * 5/9;
    return celsius;
};

//Test the functions.
let celsiusTemperature = 20;
let fahrenheitTemperature = 70;

console.log(`${celsiusTemperature} Celsius is equal to ${celsiusToFahrenheit(celsiusTemperature)} Fahrenheit.`);
console.log(`${fahrenheitTemperature} Fahrenheit is equal to ${fahrenheitToCelsius(fahrenheitTemperature)}`);