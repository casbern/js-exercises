const myFunction = require('../creating-sets.js')

test('test', () => {
  expect(myFunction(1, 'b', 3)).toEqual(new Set([1, 'b', 3]))
})
test('test', () => {
  expect(myFunction(NaN, null, false)).toEqual(new Set([NaN, null, false]))
})
test('test', () => {
  expect(myFunction('a', ['b'], { c: 3 })).toEqual(new Set(['a', ['b'], { c: 3 }]))
})