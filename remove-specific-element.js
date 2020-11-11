// Write a function that takes an array and a value as argument
// The function should clean the array from all occurrences of the given value and return the the cleaned version

//FIRST RESOLUTION
// module.exports = function myFunction(arr, value) {
//   for( let i = 0; i < arr.length; i++) {
//     if( arr[i] === value) {
//       arr.splice(i, 1)
//     }
//   }
//   return arr
// }

//SECOND RESOLUTION
module.exports = function myFunction(arr, value) {
  
  arr.map( (item, index) => {
    if(item === value) {
      arr.splice(index, 1)
    }
  })

  return arr
}