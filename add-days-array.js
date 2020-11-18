// Write a function that takes as argument an object with the 
// properties date and daysToAdd, containing a Javascript date and a number
// It should add daysToAdd days to the date and return the number 
// of milliseconds since January 1, 1970, 00:00:00 UTC
//

function myFunction(obj) {

  return obj.date.setDate(obj.date.getDate() + obj.daysToAdd)
  }

  console.log(myFunction({ date: new Date(Date.UTC(2000,01,01)), daysToAdd: 31 }))

//https://codewithhugo.com/add-date-days-js/