// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays
//

// FIRST RESOLUTION
// module.exports = function myFunction(...arr) {

//   let mergedArray = []

//   for (let value of arr) {
//     mergedArray = mergedArray.concat(value)
//   }

//   return mergedArray
// }

//SECOND RESOLUTION
module.exports = function myFunction(...arr) {

  let newArr = []

  arr.map( value => {
    newArr = newArr.concat(value)
  })

  return newArr
}

//console.log(myFunction([true, true], [1, 2], ['a', 'b']) )