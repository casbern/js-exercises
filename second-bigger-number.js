function getSecondLargest(nums) {
  // Complete the function
  let maxNumber = 0;
  let index;
  
  for(let i = 0; i < nums.length; i++) {
      if( nums[i] > maxNumber ) {
          maxNumber = nums[i]
          index = i
      } 
      
      if ( nums[i] === maxNumber ) {
          nums.splice(i,1)
      } 
  }

nums.splice(index,1)

return Math.max(...nums)       
  
}

console.log(getSecondLargest([2,3,6,6,5]))