const prices = [10.99, 44.56, 112.79, 3, 5];
let sum = 0; // start value for the sum

// Your code here:
for (let price = 0; price < prices.length; price++) {
  sum += prices[price];
}

console.log(sum);
