let seriesPending = ['Breaking Bug', 'Game of Drones', 'Boolean 99', 'Arrested Developer'];

// adding a new string element at the end of the array
seriesPending.push('Supernatural');

// printing all the elements of the array
for (let serie = 0; serie < seriesPending.length; serie++) {
  console.log(seriesPending[serie]);
  if (seriesPending[serie] === 'Boolean 99') {
    console.log('Found it!');
  }
}

// creating an empty array
let seriesWatching = [];

// removing the first element of the seriesPending array
// adding the removed element at the end of the seriesWatching array
seriesWatching.push(seriesPending.shift());

// printing the length of both arrays
console.log(seriesWatching.length);
console.log(seriesPending.length);

// moving all the series to seriesWatching
for (let addSerie = 0; addSerie < 4; addSerie++) {
  seriesWatching.push(seriesPending.shift());
}

// printing the length of both arrays
console.log(seriesWatching.length);
console.log(seriesPending.length);

// removing all the elements from seriesWatching
seriesWatching.splice(0, seriesWatching.length);

// printing the length of both arrays
console.log(seriesWatching.length);
console.log(seriesPending.length);
