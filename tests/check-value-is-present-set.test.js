const myFunction = require('../check-value-is-present-set.js')

test('test', () => {
  expect(myFunction(new Set([1, 2, 3]), 2)).toEqual(true)
})
test('test', () => {
  expect(myFunction(new Set([123]), 2)).toEqual(false)
})
test('test', () => {
  expect(myFunction(new Set(['1', '2', '3']), '2')).toEqual(true)
})
test('test', () => {
  expect(myFunction(new Set('123'), '2')).toEqual(true)
})
