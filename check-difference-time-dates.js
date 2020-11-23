// Write a function that takes two date instances as argument
// It should return true if the difference between the dates is less than or equal to 1 hour
// It should return false otherwise
//

module.exports = function myFunction(date1, date2) {

  let diff = (date1.getTime() - date2.getTime()) / 1000

  diff = diff / 3600

  if(Math.abs(Math.round(diff)) <= 1) {
    return true
  } else {
    return false
  }
  }

//console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')))