// Write a function that takes a Set and a value as argument
// If existing in the Set, remove the value from the Set
// Return the result

module.exports = function myFunction(mySet, value) {
  mySet.delete(value)
  return Array.from(mySet)
  }

//const results = myFunction(new Set([1, 2, 3]), 3)
//console.log(results)