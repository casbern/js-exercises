// Write a function that takes two date instances as argument
// It should return true if they fall on the exact same day
// It should return false otherwise
//

module.exports = function myFunction(date1,date2) {

  return date1.getDay() === date2.getDay()
  
  }