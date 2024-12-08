// a function that returns a string representing the final price with the tax added
function getPriceAfterTax(price, tax) {
  let finalPrice = price + (price * tax / 100);
  console.log("The price afer tax is " + finalPrice + "$");
}

// invoking the function getPriceAfterTax 
const label = getPriceAfterTax(300, 21);
