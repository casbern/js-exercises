const myFunction = require('../round-number')

test('check if the number was rounded', () => {
  expect(myFunction(2.12397)).toEqual(2.12)
})
test('check if the number was rounded', () => {
  expect(myFunction(3.136)).toEqual(3.14)
})
test('check if the number was rounded', () => {
  expect(myFunction(1.12397)).toEqual(1.12)
})
test('check if the number was rounded', () => {
  expect(myFunction(26.1379)).toEqual(26.14)
})