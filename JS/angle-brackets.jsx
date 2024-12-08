let count = 0;
const text = "[] <> {} [] << [] <> {} [] << {} >> [] <> {} << {} >> [] <> {}";


// Your code here:
// counts the number of times the substring <> appears in the given string


// Check your code:
for (let i = 0; i < text.length; i++) {
  let substring = text[i] + text[i + 1];
  if (substring === "<>") {
    count++;
  }
}
console.log("count: ", count);
