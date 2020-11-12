const myFunction = require('../create-range.js')

test('check if the items of an array are equal', () => {
  expect(myFunction(2,10)).toEqual([2, 3, 4, 5, 6, 7, 8, 9, 10])
})
test('check if the items of an array are equal', () => {
  expect(myFunction(1,3)).toEqual([1, 2, 3])
})
test('check if the items of an array are equal', () => {
  expect(myFunction(-5,5)).toEqual([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5])
})
test('check if the items of an array are equal', () => {
  expect(myFunction(2,7)).toEqual([2, 3, 4, 5, 6, 7])
})