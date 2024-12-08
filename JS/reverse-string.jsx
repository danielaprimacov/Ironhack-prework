const word = "Hello";
let wordReversed = "";


// Your code: 
// using a foor loop, reversing the string stored in the variable word
for (let i = word.length - 1; i>= 0; i--) {
  wordReversed += word[i];
}

// printing the new string stored in the variable wordReversed
console.log(wordReversed);

