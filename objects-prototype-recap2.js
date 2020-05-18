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


const obj = {
  name: "node",
  age: 5
}

console.log(obj.age.toString())
console.log(obj.name.valueOf())
console.log(obj.toLocaleString())

