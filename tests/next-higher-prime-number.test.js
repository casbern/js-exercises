const myFunction = require('../next-higher-prime-number')

test('check how many times the given letter appeared.', () => {
  expect(myFunction(38)).toEqual(41)
})
test('check how many times the given letter appeared.', () => {
  expect(myFunction(7)).toEqual(7)
})
test('check how many times the given letter appeared.', () => {
  expect(myFunction(115)).toEqual(127)
})
test('check how many times the given letter appeared.', () => {
  expect(myFunction(2000)).toEqual(2003)
})