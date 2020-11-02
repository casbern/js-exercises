// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order
//

 function myFunction(arr) {

  //return arr.sort().reverse()
  let test = arr.sort( (a,b) => b - a)
  return test
  }

  myFunction([4,2,3,1])   