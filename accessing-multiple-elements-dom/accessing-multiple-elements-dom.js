// Write a function that takes a number as argument
// There are 3 test cases for this challenge
// For each test case, there is an element on the page with classname 'output'
// Use the number as index for accessing the output element of a test case
// Get the text content of the respective output element
// Transform the text content into a number and return it

function myFunction(num) {
  const output = document.querySelectorAll(".output")
  const result = Number(output.item(num).innerHTML)

  return result
}

const result1 = myFunction(0)
const result2 = myFunction(1)
const result3 = myFunction(2)

console.log(result1)
console.log(result2)
console.log(result3)

