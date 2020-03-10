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

//Output: 

let referenceType = { a: 1, b: 2 }
let referenceType2 = referenceType

referenceType.a = 10
