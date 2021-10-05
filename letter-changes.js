// function letterChanges(str) {
//   const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","z"]
//   const vowels = ["a", "e", "i", "o", "u"]
//   const sym = ["", "!", "*", ":", "?", 1, 2, 3, 4, 5, 6, 7, 8, 9]
  
//   let newString = ""
  
//   for(let letter of str) {
//     for(let i = 0; i < alphabet.length; i++) {
//       if(letter == alphabet[i]) {
//         newString += alphabet[i+1]
//       }

//       if(letter == sym[i]) {
//         newString += sym[i]
//       }
//     }  
//   }

//   for(let letter of newString) {
//     for(let i = 0; i < vowels.length; i++) {
//       if(letter == vowels[i]) {
//         newString = newString.replace(/[a,e,i,o,u]/g, vowels[i].toLocaleUpperCase())
//       }
//     }

//   }

//   return newString
// }

//ANOTHER SOLUTION

function letterChanges(str) {
  let shift = str.replace(/[a-z]/gi, function(letter) {
    return (letter === 'z' || letter === 'Z') ? 'a' : String.fromCharCode(letter.charCodeAt() + 1);
});
let answer = shift.replace(/[aeiou]/gi, function(letter) {
    return letter.toUpperCase();
})
return answer; 
}


const result = letterChanges("fun times!")
console.log(result)