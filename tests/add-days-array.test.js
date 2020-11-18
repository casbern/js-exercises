const myFunction = require('../add-days-array.js')

test('check if it is the same type', () => {
  expect(myFunction({ date: new Date(Date.UTC(2000,01,01)), daysToAdd: 31 })).toEqual(952041600000)
})
test('check if it is the same type', () => {
  expect(myFunction({ date: new Date(Date.UTC(2000,01,01)), daysToAdd: 10 })).toEqual(950227200000)
})
test('check if it is the same type', () => {
  expect(myFunction({ date: new Date(Date.UTC(2000,02,28,)), daysToAdd: 2 })).toEqual(954374400000)
})
