const myFunction = require('../sum-all-array-elements.js')

test('check if the sum of the array gives me the right result', () => {
  expect(myFunction([1, 2, 3, 4, 5, 6, 7], 2) ).toEqual(25)
})
test('check if the sum of the array gives me the right result', () => {
  expect(myFunction([-10, -11, -3, 1, -4], -3) ).toEqual(1)
})
test('check if the sum of the array gives me the right result', () => {
  expect(myFunction([78, 99, 100, 101, 401], 99) ).toEqual(602)
})