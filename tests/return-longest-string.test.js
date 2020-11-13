const myFunction = require('../return-longest-string.js')

test('check if the longest string is returned', () => {
  expect(myFunction(['help', 'me']) ).toEqual('help')
})
test('check if the longest string is returned', () => {
  expect(myFunction(['I', 'need', 'candy']) ).toEqual('candy')
})
