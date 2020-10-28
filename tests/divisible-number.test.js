const myFunction = require('../divisible-number')

test('check if the number is divisible', () => {
  expect(myFunction(1,23)).toEqual(23)
})
test('check if the number is divisible', () => {
  expect(myFunction(23,23)).toEqual(23)
})
test('check if the number is divisible', () => {
  expect(myFunction(7,3)).toEqual(9)
})
test('check if the number is divisible', () => {
  expect(myFunction(-5,7)).toEqual(0)
})
test('check if the number is divisible', () => {
  expect(myFunction(-5,2)).toEqual(0)
})
test('check if the number is divisible', () => {
  expect(myFunction(-4,2)).toEqual(-4)
})