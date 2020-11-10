//* FIRST RESOLUTION
// function modifyArray(nums) {
//   let newArray = []
//   for(let num of nums) {
//       if(num % 2 === 0) {
//           newArray.push(num * 2)
//       } else {
//           newArray.push(num * 3)
//       }
//   }
//   return newArray
// }

//* SECOND RESOLUTION
function modifyArray(nums) {
  return nums.map( num => num % 2 === 0 ? num * 2 : num * 3 )
}

console.log(modifyArray([1,2,3,4,5]))