// Write a function that takes a Set and an array as arguments
// If not already existing, add each element in the array to the Set
// Return the modified Set

module.exports = function myFunction(mySet, arr) {

  return new Set([...mySet, ...arr])
}

//const results = myFunction(new Set('12345'), [...'6789'])
//const results = myFunction(new Set([1, 2, 3]), [4, 5, 6])
//console.log(results)