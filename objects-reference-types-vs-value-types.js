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
  console.log(a + 1)
}

let a = 4
number(a)

//* Referente types are copied by reference in parameter functions
// It won't change because the value will only exist inside the scope.

function value(a) {
  console.log(a.value = 8)
}
let value1 = { value: 2}

value(value)