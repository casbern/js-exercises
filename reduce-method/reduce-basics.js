const numbers = [1,2,3,4]
const initialValue = 0

console.log(numbers.reduce(function (result, item) {

return result + item

}, initialValue))