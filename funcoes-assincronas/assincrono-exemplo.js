//O resultado de cada function call aparecerá em diferentes posições.

// function doubleNumber(num) {
//   let x = Math.floor(Math.random() * 100 + 1 )
//   setTimeout( function() {
//     console.log(`Esse é o número multiplicado ${ num * 2 }`) 
//   },x)
// }

// doubleNumber(10.20) //20.40
// doubleNumber(10) //20
// doubleNumber(5) //10
// doubleNumber(5.40) //10.80
// doubleNumber(6.20) //12.40

 
function doubleNumber(num, num2) {
  let x = Math.floor(Math.random() * 100 + 1 )
  setTimeout( function() {
    const result = (num * 2) + num2

    return result
  },x)
}

let result
result = doubleNumber(5, 0)
console.log(result)

result = doubleNumber(12, result)
console.log(result)

result = doubleNumber(2, result)
console.log(result)

