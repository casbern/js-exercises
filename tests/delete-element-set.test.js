const myFunction = require('../delete-element-set.js')

test('test', () => {
  expect(myFunction(new Set([1, 2, 3]), 1)).toEqual([2, 3])
})
test('test', () => {
  expect(myFunction(new Set('12345'), '3')).toEqual(['1','2','4','5'])
})
test('test', () => {
  expect(myFunction(new Set([1, 2, 3]), 4)).toEqual([1, 2, 3])
})

