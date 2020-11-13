const myFunction = require('../merge-arbitrary-number-array.js')

test('check if the array was merged', () => {
  expect(myFunction([1, 2, 3], [4, 5, 6]) ).toEqual([1, 2, 3, 4, 5, 6])
})
test('check if the array was merged', () => {
  expect(myFunction(['a', 'b', 'c'], [4, 5, 6]) ).toEqual(['a', 'b', 'c', 4, 5, 6])
})
test('check if the array was merged', () => {
  expect(myFunction([true, true], [1, 2], ['a', 'b']) ).toEqual([true, true, 1, 2, 'a', 'b'] )
})