/* In a block scope var and let react differently.
The var a will console.log its result whareas the variable let
will give an undefined error. */

{
  var a = 10
  let b = 11
}

console.log(a)

console.log(b)

/* In a function both act the same giving an error that
variable is not defined. */

function add(n1,n2) {

  var test = "Alguma coisa"

  let total = n1 + n2

  return total
  
}

const result = add(2,2)
console.log(result)

console.log(test)
//console.log(total) 