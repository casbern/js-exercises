const myFunction = require('../remove-specific-element.js')

test('check if the items of an array are equal', () => {
  expect(myFunction([1,2,3], 2)).toEqual([1,3])
})
test('check if the items of an array are equal', () => {
  expect(myFunction([1,2,'2'], '2')).toEqual([1,2])
})
test('check if the items of an array are equal', () => {
  expect(myFunction([false,'2',1], false)).toEqual(['2',1])
})
test('check if the items of an array are equal', () => {
  expect(myFunction([1,2,'2',1], 1)).toEqual([2,'2'])
})