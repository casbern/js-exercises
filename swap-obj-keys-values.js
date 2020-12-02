// Write a function that takes an object as argument
// Somehow, the properties and keys of the object got mixed up
// Swap the Javascript object's key with its values and return the resulting object

module.exports = function myFunction(obj) {
  const newObj = {}
  
  for(let key in obj) {
   value = obj[key]
   newObj[value] = key
  }

  return newObj
}

//console.log(myFunction({ Berlin: 'city', Germany: 'country'}))
//console.log(myFunction({ sheep: 'animal', ewe: 'female', ram: 'male', lamb: 'young'})) 