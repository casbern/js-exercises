const myFunction = require('../merge-two-arrays-duplicate-values.js')

test('check if the array is merged', () => {
  expect(myFunction([1, 2, 3], [3, 4, 5]) ).toEqual([ 1, 2, 3, 4, 5 ])
})
test('check if the array is merged', () => {
  expect(myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]) ).toEqual([ -11, -10, 5, 22, 41, 42, 333])
})
