function getSecondLargest(nums) {
// FIRST WAY OF SOLVING THIS PROBLEM
//   let maxNumber = 0;
//   let oldMaxNumber;
//   let index;
  
//   for(let i = 0; i < nums.length; i++) {
//       if( nums[i] > maxNumber ) {
//           oldMaxNumber = maxNumber
//           maxNumber = nums[i]
//           index = i

//       } else if (nums[i] === maxNumber) {
//           nums.splice(i,1)
//       }    
//   }
// nums.splice(index,1)
// //return Math.max(...nums)      
// return oldMaxNumber 

// SECOND WAY OF SOLVING THIS PROBLEM
let largest = 0;
let secondLargest = 0;

for (let i = 0; i < nums.length; i++) {

    if (nums[i] > largest) {
        secondLargest = largest
        largest = nums[i]
    }

    if (nums[i] > secondLargest && nums[i] < largest) {
        secondLargest = nums[i]
    }
}

return secondLargest;
  
}

console.log(getSecondLargest([2,3,6,5,6])) //5
console.log(getSecondLargest([9,6,6,1,2])) //6
console.log(getSecondLargest([3,2,1,1,2,2,8,9])) //8
console.log(getSecondLargest([4,5,7,9,0,2,6,9])) //7