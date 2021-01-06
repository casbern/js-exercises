function splittingWord(string) {
  let evenLetters = ""
  let oddLetters = ""

  for(let i = 0; i < string.length; i++) {
  
    if(i % 2 == 0) {
      evenLetters += string[i]
    } 
    if(i % 2 == 1) {
      oddLetters += string[i]
    }
  }

  return `${evenLetters} ${oddLetters}`
}

const result = splittingWord("Hacker")

console.log(result)