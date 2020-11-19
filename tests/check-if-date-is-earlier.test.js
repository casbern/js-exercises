const myFunction = require('../check-if-date-is-earlier.js')

test('check if date is earlier than the previous one', () => {
  expect(myFunction({a: new Date('2000/01/01 08:00:00'), b: new Date('2000/01/01 08:45:00')})).toEqual(true)
})
test('check if date is earlier than the previous one', () => {
  expect(myFunction({a: new Date('2000/01/01 08:45:00'), b: new Date('2000/01/01 08:00:00')})).toEqual(false)
})
test('check if date is earlier than the previous one', () => {
  expect(myFunction({a: new Date('2000/01/01 08:00:00'), b: new Date('2000/01/01 08:00:00')})).toEqual(false)
})