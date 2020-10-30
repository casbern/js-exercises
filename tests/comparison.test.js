const myFunction = require('../comparison')

test('check how many times the given letter appeared.', () => {
  expect(myFunction(2,3)).toEqual(false)
})
test('check how many times the given letter appeared.', () => {
  expect(myFunction(3,3)).toEqual(true)
})
test('check how many times the given letter appeared.', () => {
  expect(myFunction(1,'1')).toEqual(false)
})
test('check how many times the given letter appeared.', () => {
  expect(myFunction('10','10')).toEqual(true)
})