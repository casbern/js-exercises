// This challenge is a little bit more complex
// Write a function that takes a number as argument
// If the number is prime, return the number
// If not, return the next higher prime number
//

module.exports = function myFunction(num) {

  //let primeNumbers = []

  for(let i = 2; i < num; i++) {
    if(num % i === 0) {
      num += 1
      i = 1
    } 
    // else {
    //   primeNumbers.push(num)
    // }
  }

  return num
  //Math.max(...primeNumbers)
}

