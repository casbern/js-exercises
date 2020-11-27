// Write a function that takes a string and an object with two properties as arguments
// It should return the value of the property with key equal to the value of the string

module.exports = function myFunction(obj, word) {
  for(key in obj) {
    if(key == word) {
      return obj[key]
    }
  }
  
}

//console.log(myFunction({ country: 'Sweden', continent: 'Europe'}, 'country'))

