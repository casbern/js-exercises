const myFunction = require('../dates-two-dates-equal.js')

test('check if it is the same type', () => {
  expect(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')) ).toEqual(false)
})
test('check if it is the same type', () => {
  expect(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:00:00')) ).toEqual(true)
})
test('check if it is the same type', () => {
  expect(myFunction(new Date('2001/01/01 08:00:00'), new Date('2000/01/01 08:00:00'))  ).toEqual(false)
})
