const numbers = [1, 2, 3, 4, 1, 1, 1]

// const count = countOccurrences(numbers, 9)
// console.log(count)


// function countOccurrences(array, searchElement) {
//   let sum = 0
//   for (n of array) {
//     if (n === searchElement) {
//       sum++
//     }
//   }
//   return sum
// }



function countOccurrences (array, searchElement) {
 return array.reduce(function (accumulator, currentValue){
    if (currentValue === searchElement) {
      accumulator ++
    }
    return accumulator
  },0)
}

console.log(countOccurrences(numbers,5))
