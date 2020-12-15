const myFunction = require('../intersection-two-sets.js')

test('test', () => {
  expect(myFunction(new Set([1, 2, 3]), new Set([4, 5, 6]))).toEqual(new Set())
})
test('test', () => {
  expect(myFunction(new Set('12345'), new Set([...'45678']))).toEqual(new Set('45'))
})
test('test', () => {
  expect(myFunction(new Set([1, 2, 3]), new Set([2, 3, 4]))).toEqual(new Set([2, 3]))
})
