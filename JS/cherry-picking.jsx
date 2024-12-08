const fruit = 'Apple Banana Cherry Mango';


// Your code here:

// Finding the start index of the substratin 'Cherry' in the string
let firstIndexSubstring = fruit.indexOf('Cherry');
// console.log(firstIndexSubstring);

// Using the method .slice() and the start index, copying and store the substring 'Cherry' 
let favouriteFruit = fruit.slice(firstIndexSubstring, -6);

console.log(favouriteFruit);
