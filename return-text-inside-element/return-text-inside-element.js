// Write a function that takes a string as argument
// The string contains selectors that you can use to 
// access elements on the current page
// Find the first element that matches the selectors
// Return the text content of the element
  

function myFunction(string) {
  const innerText = document.querySelector(string).innerHTML

  return innerText
}

const result1 = myFunction('h1')
console.log(result1)

const result2 = myFunction('nav a')
console.log(result2)

const result3 = myFunction('form h1')
console.log(result3)