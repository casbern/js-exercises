// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

module.exports = function myFunction(obj) {
  for(let key in obj) {
    if(obj[key] == "" || obj[key] == " ") {
      obj[key] = null
    }
  }
  return obj
  }


// const result = myFunction({ a: 'a', b: 'b', c: '' }) 
// console.log(result)