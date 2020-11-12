// Write a function that takes an array and a number (n) as arguments
// It should return the last n array elements
// If the array has less than n elements, return all

//FIRST RESOLUTION
// module.exports = function myFunction(arr, n) {
//   if( arr.length >= n ) {
//     arr = arr.slice(arr.length-n)
//   } else {
//     return arr
//   }
//   return arr
//   }

//SECOND RESOLUTION
module.exports = function myFunction(arr, n) {
  return arr.length >= n ? arr = arr.slice(arr.length-n) : arr
  }
  