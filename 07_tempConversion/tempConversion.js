const convertToCelsius = function (f) {
  let num = ((f - 32) * 5) / 9;
  return Math.round(num * 10) / 10;
};

const convertToFahrenheit = function (c) {
  let num = (c * 9) / 5 + 32;
  return Math.round(num * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
