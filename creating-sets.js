// Write a function that takes three elements of any type as arguments
// Create a Set from those elements
// Return the result

module.exports = function myFunction(elem1, elem2, elem3) {
  const mySet = new Set()
  mySet.add(elem1)
  mySet.add(elem2)
  mySet.add(elem3)

  return mySet
}

// const results = myFunction('a', ['b'], { c: 3 })
// console.log(results)