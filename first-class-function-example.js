// First-Class Functions:
// It can be stored in a variable. You can save a function definition to a variable.
// It can be passed as an argument to a function call. You can pass a function definition as an argument to another function call.
// It can be returned by functions. You can return a function definition from another function.
// Be stored in some data structure.
// Hold their own properties and methods.

//Check this: https://medium.com/launch-school/javascript-weekly-an-introduction-to-first-class-functions-9d069e6fb137

function sayHi(string) {
  console.log(string)
}

sayHi("Hi")

//Saving function to a variable
let sayOtherThing = sayHi

sayOtherThing("I am stored in the variable say now")
console.log(sayOtherThing)

//Passing as an argument to a function
function returningFunction(func) {
  return func
}

const a =  returningFunction(sayOtherThing)
a("here we go")
console.log(a)

//Storing in a data structure
const arr = [sayOtherThing]
console.log(arr[0]("Here we go again 2"))

//Owns properties
sayOtherThing.myProperty = "banana"
console.log(sayOtherThing.myProperty)