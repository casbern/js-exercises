// Write a function that takes an array and a number, say num, as arguments
// Sum up all array elements with a value greater than num
// Return the sum

// First Resolution
// module.exports = function myFunction(arr, num) {
//   let sum = 0

//   for( i of arr ) {
//     if( i > num ) {
//       sum += i
//     }
//   }
//   return sum
//   }

// Second Resolution
// module.exports = function myFunction(arr, num) {
//   return arr.reduce( (acc, cur) => {
//     if(cur > num) {
//      return acc + cur
//     } else { return acc}
//   },0)
// }

// Third Resolution
module.exports = function myFunction(arr, num) {
  return arr.filter( (item) => item > num ).reduce( (sum, cur) => sum + cur )
}

// console.log(myFunction([78, 99, 100, 101, 401], 99))