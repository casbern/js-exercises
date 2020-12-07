// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tipp: try not to mutate the original array

module.exports = function myFunction(arr, string) {
  const newArr = [...arr]
  newArr[0]['continent'] = string
  newArr[1]['continent'] = string

  return newArr
  }

//const results = myFunction([{ city: 'Stockholm', country: 'Sweden' }, { city: 'Paris', country: 'France' }], 'Europe')
//console.log(results)