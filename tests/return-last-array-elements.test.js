const myFunction = require('../return-last-array-elements.js')

test('check if the n items were returned', () => {
  expect(myFunction([1, 2, 3, 4, 5], 2) ).toEqual([4,5])
})
test('check if the n items were returned', () => {
  expect(myFunction([1, 2, 3], 6) ).toEqual([1, 2, 3])
})
test('check if the n items were returned', () => {
  expect(myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3) ).toEqual([6,7,8])
})
test('check if the n items were returned', () => {
  expect(myFunction([1, 2, 3, 4, 5, 6, 7, 8], 4) ).toEqual([5,6,7,8])
})