function roundedOneDecimal(num) {
  if (num % 1 !== 0) {
      num = Math.round(result * 10) / 10;
  }
  return num;
}

const convertToCelsius = function(temp) {
  result = (temp - 32) * 5/9
  return roundedOneDecimal(result);
};

const convertToFahrenheit = function(temp) {
  result = (temp * 9/5 + 32);
  return roundedOneDecimal(result);
};

console.log(convertToCelsius(32));
console.log(convertToCelsius(100))
console.log(convertToCelsius(-100))
console.log(convertToFahrenheit(0))
console.log(convertToFahrenheit(73.2))
console.log(convertToFahrenheit(-10))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
