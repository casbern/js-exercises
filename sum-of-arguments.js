// Receiving a vetor

// function sumOfArguments (numbers) {
//   let output = 0
//   if(Array.isArray(numbers)) {
//     for (number of numbers) {
//       output += number
//     }
//   }
//   return output
// }

// console.log(sumOfArguments([1,2,3,4]))

// ===== ******* =====

// Receiving numbers

// function sumOfArguments(...numbers) {
//   let output = 0
//   for (number of numbers) {
//       output += number    
//   }
//   return output
// }

//console.log(sumOfArguments(1,2,3,4))


// ===== ******* =====

function sumOfArguments(...items) {
  console.log(items) // items will become an array. when received an array, items will become an array of array.
  
  if (items.length === 1 && Array.isArray(items[0])) {
    items = [...items[0]] // you set another value to items variable (spread the first array)
  }

  return items.reduce((acc, initialV) => acc += initialV)
}

//console.log(sumOfArguments(1, 2, 3, 4, 5))
console.log(sumOfArguments([1, 2, 3, 4, 5]))