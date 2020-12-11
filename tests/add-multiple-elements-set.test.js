const myFunction = require('../add-multiple-elements-set.js')

test('test', () => {
  expect(myFunction(new Set([1, 2, 3]), [4, 5, 6])).toEqual(new Set([1, 2, 3, 4, 5, 6 ]))
})
test.skip('test', () => {
  expect(myFunction(new Set('12345'), [...'6789'])).toEqual(new Set([...'123456789']) )
})
test('test', () => {
  expect(myFunction(new Set([1, 2, 3]), [2, 3])).toEqual(new Set([1, 2, 3]) )
})
