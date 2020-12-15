// Write a function that takes two sets, say setA and setB, as arguments
// Get the intersection of the sets
// In other words, return a set containing all elements that are both in setA as well as setB

module.exports = function myFunction(mySet1, mySet2) {
  const intersectionSet = new Set()

  for(let elem of mySet1) {
    if(mySet2.has(elem)) {
      intersectionSet.add(elem)
    }
  }
  return intersectionSet
  }

//const results = myFunction(new Set([1, 2, 3]), new Set([4, 5, 6]))
//console.log(results)