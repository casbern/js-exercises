// Write a function that takes an array of strings as argument
// It should return the longest string
//

module.exports = function myFunction(arr) {
  let longestString = arr[0]

  arr.map( (valorAtual) => {
    if(valorAtual.length > longestString.length) {
      longestString = valorAtual
    }
  }) 
  return longestString
}

