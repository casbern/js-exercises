// This is a more difficult challenge
// Write a function that takes two date instances as arguments
// It should return an object with the properties 'hrs', 'min', and 'sec'
// The corresponding values should display the absolute difference between the two dates in hours, minutes, and seconds
//

module.exports = function myFunction(startDate, endDate) {
  startDateHours = parseInt(startDate.getHours())
  endDateHours = parseInt(endDate.getHours())

  startDateMinutes = parseInt(startDate.getMinutes())
  endDateMinutes = parseInt(endDate.getMinutes())

  startDateSeconds = parseInt(startDate.getSeconds())
  endDateSeconds = parseInt(endDate.getSeconds())
  

  return { 
    hrs: Math.abs(startDateHours - endDateHours),
    min: Math.abs(startDateMinutes - endDateMinutes),
    sec: Math.abs(startDateSeconds - endDateSeconds)
  }
  }

  //console.log(myFunction(new Date('2000/01/01 09:50:23'), new Date('2000/01/01 08:00:00')))