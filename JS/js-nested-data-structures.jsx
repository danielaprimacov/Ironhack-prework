let products = [
  {
    name: 'iPhone',
    price: 799.99
  },
  {
    name: 'Samsung Galaxy S10',
    price: 900.0
  }
];


// displaying the price of iPhone
console.log(products[0].name);

// displaying both phones' names
for (let i = 0; i < products.length; i++) {
  console.log(products[i].name);
}

// adding a new phone at the beginning of the array
products.unshift({name: 'Xiaomi', price: 780.0});
//console.log(products);

// removing the last element of the array
products.pop();
console.log(products);

let course = {
  name: 'Web Development',
  type: ['full-time', 'part-time'],
  topics: ['HTML/CSS & Responsive Design', 'JavaScript', 'MongoDB', 'Node', 'Express', 'React']
};

// printing my course type, the most familiar topic, the least familiar topic
console.log(`My course type is ${course.type[1]}`);
console.log(`For me the most familiar topic is ${course.topics[0]} and the least familiar topic is ${course.topics[3]}`);

let student = {
  firstName: 'Ana',
  lastName: 'Blair',
  course: {
    name: 'Web Development',
    type: 'part-time'
  },
  attendedIn: 'Madrid',
  address: {
    street: 'Happy Street',
    number: 123,
    city: 'Barcelona',
    zip: 08015,
    country: 'Spain'
  }
};

console.log(student.course.name); // => Web Development
console.log(student.address.street); // => Happy Street
console.log(`${student.firstName} moved from ${student.address.city} to take ${student.course.type} ${student.course.name} course.`);
// => Ana moved from Barcelona to Madrid to take part-time Web Development course.



const ironCampuses = [
  ["Mexico City", "Miami", "Sao Paulo"],
  ["Amsterdam", "Barcelona", "Berlin", "Lisbon", "Madrid", "Paris"]
];

console.log(ironCampuses[0][1]); // => Miami
console.log(ironCampuses[1][0]); // => Amsterdam
console.log(ironCampuses[1][5]); // => Paris


//Use the example from the lesson with frameworks to retrieve the following:
let basic = {
  language: 'JavaScript',
  frameworks: [
    {
      end: 'back',
      list: [
        {
          name: 'ExpressJS',
          released: 2010
        },
        {
          name: 'MeteorJS',
          released: 2012
        }
      ]
    },
    {
      end: 'front',
      list: [
        {
          name: 'ReactJS',
          released: 2013
        },
        {
          name: 'VueJS',
          released: 2014
        }
      ]
    }
  ]
};

console.log(basic.frameworks[0].list[0].name); // => ExpressJS
console.log(`In Ironhack, I'll learn ${basic.frameworks[0].list[0].name} and ${basic.frameworks[1].list[0].name}`); // => In Ironhack, I'll learn ExpressJS and ReactJS.
