const myFunction = require('../convert-set-to-array.js')

test('test', () => {
  expect(myFunction(new Set([1, 2, 3]))).toEqual([1, 2, 3])
})
test('test', () => {
  expect(myFunction(new Set([123]))).toEqual([123])
})
test('test', () => {
  expect(myFunction(new Set(['1', '2', '3']))).toEqual(['1', '2', '3'])
})
test('test', () => {
  expect(myFunction(new Set('123'))).toEqual(['1', '2', '3'])
})
