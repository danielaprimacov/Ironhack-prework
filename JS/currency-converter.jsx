// function that convert the specified amount of dollars to euro
function convertDollarsToEuros(dollarAmount) {
  euroAmount = dollarAmount * 0.92;
  euroAmount = euroAmount.toFixed(2);
  return euroAmount;
}

const result = convertDollarsToEuros(115);
console.log(result);
