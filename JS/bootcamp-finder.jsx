// a function that prints the name of the city where Ironhack has a campus
function findBootcamp(country) {
  if (country === "USA") {
    console.log("Miami campus");
  } else if (country === "France") {
    console.log("Paris campus");
  } else if (country === "Germany") {
    console.log("Berlin campus");
  } else {
    console.log("Remote");
  }
}

findBootcamp("France");
