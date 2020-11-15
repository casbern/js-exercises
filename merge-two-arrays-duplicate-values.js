// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array

module.exports = function myFunction(arr1, arr2) {
  const newArray = [...arr1, ...arr2]
  
  return Array.from(new Set(newArray)).sort( (a,b) => {
    return a - b
  })

  }



  // console.log(myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]))