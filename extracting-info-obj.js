// Write a function that takes an object as argument containing properties with personal information
// Extract firstName, lastName, size, and weight if available
// If size or weight is given transform the value to a string
// Attach the unit cm to the size
// Attach the unit kg to the weight
// Return a new object with all available properties that we are interested in

module.exports = function myFunction(obj) {
  let {fn, ln, size, weight} = obj
  let newObj = { fn, ln }


  if(size != undefined) {
    size = size.toString().concat('cm')
    newObj['size'] = size
  } 

  if(weight != undefined) {
    weight = weight.toString().concat('kg')
    newObj['weight'] = weight
  }
  
  return newObj
  }

  // const result = myFunction({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71})
  // const result1 = myFunction({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'})
  
  // console.log(result)
  // console.log(result1)