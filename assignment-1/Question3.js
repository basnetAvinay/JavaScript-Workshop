/*
  Q3. The Temperature Converter

  Store a celsius temperature into a variable.
  Convert it to fahrenheit and output "NN°C is NN°F".
  Now store a fahrenheit temperature into a variable.
  Convert it to celsius and output "NN°F is NN°C."   
*/

let celsiusTemp = 37;
const fahrenheitTemp = celsiusTemp * 1.8 + 32;
console.log(celsiusTemp + " celsius = " + fahrenheitTemp + " farenheit");

let farenTemp = 98.6;
const celTemp = (farenTemp - 32) / 1.8;
console.log(farenTemp + " farenheit = " + celTemp + " celsius");
