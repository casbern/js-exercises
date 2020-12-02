const myFunction = require('../extracting-info-obj.js')

test('return new object', () => {
  expect(myFunction({fn: 'Lisa', ln: 'Müller', age: 17, size: 175, weight: 67}) ).toStrictEqual({fn: 'Lisa', ln: 'Müller', size: '175cm', weight: '67kg'})
})
test('return new object', () => {
  expect(myFunction({fn: 'Martin', ln: 'Harper', age: 26, email: 'martin.harper@test.de', weight: 102}) ).toStrictEqual({fn: 'Martin', ln: 'Harper', weight: '102kg'} )
})
test('return new object', () => {
  expect(myFunction({fn: 'Andrew', ln: 'Harper', age: 81, size: 175, weight: 71})).toStrictEqual({fn: 'Andrew', ln: 'Harper', size: '175cm', weight: '71kg'} )
})
test('return new object', () => {
  expect(myFunction({fn: 'Matthew', ln: 'Müller', age: 19, email: 'matthew@mueller.de'})).toStrictEqual({fn: 'Matthew', ln: 'Müller'} )
})