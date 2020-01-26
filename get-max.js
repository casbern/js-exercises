const numbers = [1, 2, 3, 4, 5, 10]

const max = getMax(numbers)

console.log(max)

// function getMax(array) {
//   let onHold = 0
//   for(item of array) {
//     if(item > onHold) {
//       onHold = item
//     }
//   }
//   return onHold
// }

function getMax(array) {
  let maxNum = 0
  return array.reduce(function (accumulator, currentValue) {
    if (currentValue > maxNum) {
      maxNum = currentValue
    }
  }, 0)
  return maxNum
}