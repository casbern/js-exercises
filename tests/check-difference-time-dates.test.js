const myFunction = require('../check-difference-time-dates.js')

test('check if date is earlier than the previous one', () => {
  expect(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00'))).toEqual(true)
})
test('check if date is earlier than the previous one', () => {
  expect(myFunction(new Date('2000/01/01 09:00:00'), new Date('2000/01/01 08:45:00'))).toEqual(true)
})
test('check if date is earlier than the previous one', () => {
  expect(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:45:00'))).toEqual(false)
})
test('check if date is earlier than the previous one', () => {
  expect(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 09:00:00'))).toEqual(true)
})