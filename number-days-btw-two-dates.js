// Write a function that takes two date instances as argument
// It should return the number of days that lies between those dates
//

function myFunction(dateFuture, datePast) {
  const timestampFuture = dateFuture.getTime()
  const timestampPast = datePast.getTime()

  const difference = timestampFuture - timestampPast

  console.log(difference)

  const differenceDays = difference / ( 1000 * 60 * 60 * 24)

  console.log(differenceDays)

  return differenceDays
  }

  console.log(myFunction(new Date('2020-06-01'), new Date('2000-01-01')))