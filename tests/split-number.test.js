const myFunction = require('../split-number')

test('check if the output is corrected', () => {
  expect(myFunction(10)).toEqual([1,0])
})
test('check if the output is corrected', () => {
  expect(myFunction(931)).toEqual([9,3,1])
})
test('check if the output is corrected', () => {
  expect(myFunction(193278)).toEqual([1,9,3,2,7,8])
})
