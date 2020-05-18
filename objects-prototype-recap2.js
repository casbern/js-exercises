//arr inherits from arrayBase (where we have all methods we can
//apply to our array) and arrayBase inherits from the objectBase.
//This is called multilevel inheritance.

const arr = [1,2,3,4,10,20,25,30,99]

arr.find( (num) => {
  if(num > 10) {
    console.log(num)
  }
})

console.log(arr.map( (num) => {
 return num * 2
}))

console.log(arr.reduce( (acc, cur) => {
  return acc+cur
}))

console.log(arr.sort())

 // =====

const obj = {
  name: "node",
  age: 5
}

console.log(obj.age.toString()) //it transform a number into a string
console.log(obj.name.valueOf()) //it shows name's value
console.log(obj.propertyIsEnumerable("name")) //returns a boolean 
//indicating if the specified property is enumerable and is the object´s own property. 

// =====
// Some string methods:

let ex = "This is an example of a string".length //it gives how long this string is.
let ex1 = "This is an example of a string".slice(0,5) //it returns a piece of the string. 
//It takes a start position and an end position.
let ex2 = "This is an example of a string".split("") //it converts the string into an array.

// ======
// Some numbers methods:
let ex3 = 890326
ex3.toString()
ex3.toFixed(2)
ex3.toExponential(2)
