const mixedArray = [123, 'abc', true, { a: 1 }, ['js', 'node', 'react'], undefined];

// YOUR CODE HERE
function printTheType(myArray) {
  myArray.forEach(elem => {
    console.log(`The element ${elem} is of type: ${typeof elem}.`)
  })
}

printTheType(mixedArray);

let user = {
  username: 'ironhacker',
  password: '123iron345'
};

function getCredentials(definedUser) {
  console.log(`Username is: ${definedUser.username} and the password is: ${definedUser.password}`);
}

// => expected output:
// Username is: ironhacker and the password is: 123iron345.
getCredentials(user);


let property = {
  owner: {
    firstName: 'John',
    lastName: 'Doe',
    age: 44
  },
  isForSale: false,
  sqrm: 120,
  address: {
    street: 'Happy St',
    number: 123,
    city: 'Miami',
    state: 'FL',
    country: 'US'
  },
  amenities: ['pool', 'tennis court', 'private parking', 'yard']
};

// YOUR CODE HERE
if (property.isForSale === true) {
  console.log(`The owner, ${property.owner.firstName} ${property.owner.lastName} put the home for sale! The property has ${property.amenities.length} amenities `);
} else {
  console.log(`The home in ${property.address.street} no. ${property.address.number} is not for sale.`);
}
