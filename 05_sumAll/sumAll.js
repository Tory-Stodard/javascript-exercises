const sumAll = function (num1, num2) {
  let newSum = 0;
  let firstNumber;
  let secondNumber;
  if (typeof num1 != 'number' || typeof num2 != 'number') {
    return 'ERROR';
  } else if (num1 < 0 || num2 < 0) {
    return 'ERROR';
  } else if (num1 < num2) {
    firstNumber = num1;
    secondNumber = num2;
  } else if (num1 > num2) {
    firstNumber = num2;
    secondNumber = num1;
  }
  for (let i = firstNumber; i <= secondNumber; i++) {
    newSum += i;
  }

  return newSum;
};

// Do not edit below this line
module.exports = sumAll;
