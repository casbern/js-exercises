// Write a function that takes a number as argument
// The function should split the number into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting

module.exports = function myFunction(num) {
  let result = [];
  num = num.toString();

  for (let i of num) {
    //i = parseInt(i)
    result.push(i)
  }

  return result
  }

  // myFunction(10) 
  // myFunction(931) 
  // myFunction(193278) 
