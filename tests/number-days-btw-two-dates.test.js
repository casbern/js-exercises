const myFunction = require('../number-days-btw-two-dates.js')

test('check number of days between two dates', () => {
  expect(myFunction(new Date('2020-06-11'), new Date('2020-06-01'))).toEqual(10)
})
test('check number of days between two dates', () => {
  expect(myFunction(new Date('2020-06-01'), new Date('2000-01-01'))).toEqual(7457)
})
