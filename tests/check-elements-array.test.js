const myFunction = require('../check-elements-array.js')

test('check if the items of an array are equal', () => {
  expect(myFunction([true, true, true, true])).toEqual(true)
})
test('check if the items of an array are equal', () => {
  expect(myFunction(['test', 'test', 'test'])).toEqual(true)
})
test('check if the items of an array are equal', () => {
  expect(myFunction([1,1,1,2])).toEqual(false)
})
test('check if the items of an array are equal', () => {
  expect(myFunction(['10',10,10,10])).toEqual(false)
})