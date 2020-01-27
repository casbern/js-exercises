const numbers = [1, 2, 3, 4, 5, 100, 1500]

const max = getMax(numbers)

console.log(max)

// function getMax(array) {
//   let max = array[0]
//   for(item of array) {
//     if(item > max) {
//       max = item
//     }
//   }
//   return max
// }

// function getMax(array) {
//   let maxNum = 0
//   return array.reduce(function (accumulator, currentValue) {
//     if (currentValue > maxNum) {
//       maxNum = currentValue
//     }
//     return maxNum
//   }, 0)
// }

function getMax(array) {
  return array.reduce((a,b) => (a > b) ? a : b)
}