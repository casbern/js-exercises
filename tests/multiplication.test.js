const myFunction = require('../multiplication')

test('check how many times the given letter appeared.', () => {
  expect(myFunction(10,100)).toEqual(0.1)
})
test('check how many times the given letter appeared.', () => {
  expect(myFunction(90,45)).toEqual(4050)
})
test('check how many times the given letter appeared.', () => {
  expect(myFunction(8,20)).toEqual(0.4)
})
test('check how many times the given letter appeared.', () => {
  expect(myFunction(2,0.5)).toEqual(1)
})