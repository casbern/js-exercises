// Write a function that takes as argument an object with 
// the properties a and b, each containing a date instance
// It should return true if date a is earlier than date b
// It should return false otherwise
//

module.exports = function myFunction(obj) {

  return obj.a.getTime() < obj.b.getTime()
}