const myFunction = require('../replace-empty-strings-obj.js')

test('return new object', () => {
  expect(myFunction({ a: 'a', b: 'b', c: '' }) ).toStrictEqual({ a: 'a', b: 'b', c: null })
})
test('return new object', () => {
  expect(myFunction({ a: '', b: 'b', c: ' ', d: 'd' }) ).toStrictEqual({ a: null, b: 'b', c: null, d: 'd' })
})
test('return new object', () => {
  expect(myFunction({ a: 'a', b: 'b ', c: ' ', d: '' })).toStrictEqual({ a: 'a', b: 'b ', c: null, d: null })
})
