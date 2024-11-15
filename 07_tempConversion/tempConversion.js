const convertToCelsius = function (temp) {
  let fahrenheitToCelsius = ((temp - 32) * 5) / 9;
  return Math.round(fahrenheitToCelsius * 10) / 10;
};

const convertToFahrenheit = function (temp) {
  let celsiusToFahrenheit = (temp * 9) / 5 + 32;
  return Math.round(celsiusToFahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
