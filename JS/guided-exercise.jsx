const product = {
  brand: 'Apple',  
  model: 'MacBook Air',
  available: false,
  price: 1200,
  tags: ['apple', 'laptop', 'mac'],
};

// creating a new property
product.year = 2019;

// updating property avaible 
product.avaible = true;

// delete the property tags
delete product.tags;

// checking if the product's price is higher than 1000
if (product.price > 1000) {
  product.discountPercentage = 10;
  
  // updating the price property to be discounted one
  product.price = product.price - product.price * (product.discountPercentage / 100);
}

// checking of the discountPercentage property exists in the object
if ('discountPercentage' in product) {
  console.log(`We got a MackBook Air on sale for just $${product.price}. That's ${product.discountPercentage}% off!`);
}




