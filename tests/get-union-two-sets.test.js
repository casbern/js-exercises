const myFunction = require('../get-union-two-sets.js')

test('test', () => {
  expect(myFunction(new Set('123'), new Set('234'))).toEqual(new Set('1234'))
})
test('test', () => {
  expect(myFunction(new Set([1, 2, 3]), new Set([3, 4, 5]))).toEqual(new Set([1, 2, 3, 4, 5]))
})
test('test', () => {
  expect(myFunction(new Set([false, false, NaN]), new Set([true, true, NaN]))).toEqual(new Set([false, NaN, true]))
})
