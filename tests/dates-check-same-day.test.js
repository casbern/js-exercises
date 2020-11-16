const myFunction = require('../dates-check-same-day.js')

test('check if it is the same type', () => {
  expect(myFunction(new Date('2000/01/01'), new Date('2000/01/01')) ).toEqual(true)
})
test('check if it is the same type', () => {
  expect(myFunction(new Date('2000/01/01'), new Date('2000/01/02')) ).toEqual(false)
})
test('check if it is the same type', () => {
  expect(myFunction(new Date('2001/01/01'), new Date('2000/01/01')) ).toEqual(false)
})
test('check if it is the same type', () => {
  expect(myFunction(new Date('2000/11/01'), new Date('2000/01/01')) ).toEqual(false)
})