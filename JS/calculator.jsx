// the function calculator
function calculator(mathSymbol, firstNumber, secondNumber) {
  let result = 0;
  if (mathSymbol === "+") {
    result = firstNumber + secondNumber;
  } else if (mathSymbol === "-") {
    result = firstNumber - secondNumber;
  } else if (mathSymbol === "*") {
    result = firstNumber * secondNumber;
  } else if (mathSymbol === "/") {
    result = firstNumber / secondNumber;
  }
  return result;
}

// involking the function calculator
const result = console.log(calculator("+", 5, 3));
