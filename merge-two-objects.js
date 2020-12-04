// Write a function that takes two objects as arguments
// Unfortunately, the property 'country' in the second object has the wrong key
// It should be named 'city' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'planet', 'continent', 'country', 'state', and 'city'

module.exports = function myFunction(obj1, obj2) {
  obj2['city'] = obj2['country']
  delete obj2['country']


  return {...obj1, ...obj2}
  }

//const results = myFunction({ continent: 'North America', country: 'USA' }, { planet: 'Earth', country: 'Los Angeles', state: 'California' }) 
//console.log(results)