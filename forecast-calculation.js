// FIRST FUNCTION 
// function printForecast(arr) {
//   for(let i = 0; i < arr.length; i++) {
//     console.log(`It will be ${arr[i]}ºC in ${i + 1} days.`) 
//   }
// }

// SECOND FUNCTION 
// function printForecast(arr) {
  

//   arr.forEach( (item, index) => {
//     console.log(`It will be ${item}ºC in ${index + 1} days.`) 
    
//   })

// }

//THIRD FUNCTION
function printForecast(arr) {

  const results = arrResults(arr)

  results.forEach( (item, index) => {
    console.log(item)
  })
  
}

function arrResults(arr) {
  let arrResults = []

  for(let i = 0; i < arr.length; i++) {
      arrResults.push(`It will be ${arr[i]}ºC in ${i + 1} days.`) 
  }

  return arrResults
}




//const result = printForecast([17, 21, 23])
const result = printForecast([12, 5, -5, 0, 4])

console.log(result)