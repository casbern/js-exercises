//* Value types (primitives) are copied by value
//* Value types are --> number, string, boolean, symbol, undefined, null

let valueType = 10 //number
let valueType2 = valueType //valueType2 holds now the number 10
//valueType2 = 20 // valueType2 will be 20 and valueType will continue being 10

valueType = 30 // valueType2 will be 20 and valueType will continue being 10

//todo Change the second variable's value, and show what happened with the value of the first variable.
//Output: Changing the second variable value won't interfere in the value of the
//the first variable.

//* Reference types are copied by reference
//* Reference types are --> objects, function, array

//Output: By changing the value of the first variable, the second will be changed as well.

let referenceType = { a: 1, b: 2 }
let referenceType2 = referenceType

referenceType.a = 10

//* Value types (primitives) are copied by value in parameter functions
// The output of the function will be 5, but the original variable will continue being 4.
function number(a) {
  a = a + 1
  //console.log(a)
}

let a = 4
number(a)

//* Referente types are copied by reference in parameter functions
// The parameter is a reference type, so when you pass that as a parameter and change that
// inside the function, it will also change the variable that holds it outside. 

function value(a) {
  a.value = 8
  console.log(a.value)
}

let value1 = { value: 2}

console.log(value(value1))

console.log(value1) // now value1 has a property with the value 8  as it was changed inside the scope of the function.