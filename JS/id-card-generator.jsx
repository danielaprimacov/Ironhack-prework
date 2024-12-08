// a function that return a string containing the full name and the age of the person
function generateIdCard(firstName, lastName, birthYear) {
  const currentAge = new Date().getFullYear();
  const age = currentAge - birthYear;
  console.log(firstName + " " +lastName + " - " + age + " years old"); 
}

// involking the function generateIdCard
const idCard = generateIdCard("John", "Doe", 1984);
