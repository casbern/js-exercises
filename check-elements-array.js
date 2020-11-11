// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise
//

module.exports = function myFunction(arr) {

  const allEqual = arr.every(val => val === arr[0])
  return allEqual
  }