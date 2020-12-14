// Write a function that takes two Sets as arguments
// Create the union of the two sets
// Return the result
// Tipp: try not to switch to Arrays, this would slow down your code

// module.exports = function myFunction(mySet1, mySet2) {
//   return new Set([...mySet1, ...mySet2]) //Downside it converts to an array before converting into a set again.
// }


module.exports = function myFunction(mySet1, mySet2) {
  const result = new Set();

  mySet1.forEach(value => {
    result.add(value);
  });

  mySet2.forEach(value => {
    result.add(value);
  });

  return result;

}
// const results = myFunction(new Set([false, false, NaN]), new Set([true, true, NaN]))
// console.log(results)