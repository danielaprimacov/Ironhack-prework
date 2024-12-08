// a function that prints the specifying the amount of discount 
function getDiscountInfo(employeeType) {
  if (employeeType === "part-time employee") {
    console.log("10%");
  } else if (employeeType === "full-time employee") {
    console.log("20%");
  } else if (employeeType === "manager") {
    console.log("30%");
  } else {
    console.log("No discount");
  }
}

// invoking function getDiscountInfo
getDiscountInfo("full-time employee");
