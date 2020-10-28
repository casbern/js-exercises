// Write a function that takes two numbers, say x and y, as arguments
// Check if x is divisible by y
// If yes, return x
// If not, return the next higher natural number that is divisible by y

module.exports = function myFunction(x,y) {
    for(let i = x; ; i++) {
      if(i < 0 && i > x) {
        continue
      }
      
      if(i % y === 0) {
        return i
      } 
    }
  }
