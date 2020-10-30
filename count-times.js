// Write a function that takes a two strings as arguments
// Return the number of times the first string occurs in the second string
//

module.exports = function myFunction(letter, phrase) {
  let count = 0

  for( let char of phrase.toLowerCase() ) {
    if( letter === char) {
      count += 1
    }
  }
  return count
}