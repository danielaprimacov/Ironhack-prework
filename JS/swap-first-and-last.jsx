// create an array with any 5 elements
const myArray = [12, 3, 5, 9, 123, 'a'];

// remove the last element
let lastElement = myArray.pop();
// remove the first element
let firstElement = myArray.shift();

// add the value of lastElement to the start of the array
myArray.unshift(lastElement);

// add the value of firstElement to the end of the array
myArray.push(firstElement);

console.log(myArray);
