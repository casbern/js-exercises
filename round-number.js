// Write a function that takes a number as argument
// Round the number to the 2nd digit after the comma
// Return the rounded number

module.exports = function myFunction(number) {

  return parseFloat(number.toFixed(2))
  }