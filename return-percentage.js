// Write a function that takes an object with the properties number and percentage as argument
// Return the given percentage of the number

function myFunction(obj) {
let {number, percentage} = obj

return number / 100 * percentage
}

myFunction({number: 100, percentage: 50}) 
myFunction({number: 777, percentage: 2}) 
myFunction({number: 500, percentage: 99}) 
