const myFunction = require('../difference-btw-hours.js')

test('check number of days between two dates', () => {
  expect(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:10'))).toEqual({ hrs: 0, min: 45, sec: 10 })
})
test('check number of days between two dates', () => {
  expect(myFunction(new Date('2000/01/01 09:50:23'), new Date('2000/01/01 08:00:00'))).toEqual({ hrs: 1, min: 50, sec: 23 })
})
test('check number of days between two dates', () => {
  expect(myFunction(new Date('2000/01/01 11:04:12'), new Date('2000/01/01 08:00:00'))).toEqual({ hrs: 3, min: 4, sec: 12 })
})