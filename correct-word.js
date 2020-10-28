// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

module.exports = function myFunction(word) {
  const alphabet = [
    'a','b','c','d','e','f','g','h','i','j','k','l','m',
    'n','o','p','q','r','s','t','u','v','x','z','w','y']

  let newWord = ""
  
  for(let letter of word) {
    for(let [i, alph] of alphabet.entries()) {
      if(letter === alph) {
        
        if(alphabet[i+1] === undefined) {
          newWord = newWord.concat('a')
        } else {
          //newWord = newWord + alphabet[i+1] //Another way!
          newWord = newWord.concat(alphabet[i+1])
        }
      } 
    }
  }
  return newWord
}
