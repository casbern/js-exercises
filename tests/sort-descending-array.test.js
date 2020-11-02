const myFunction = require('../sort-descending-array')

test('check if it returns an alphabetical array', () => {
  expect(myFunction([1,3,2])).toEqual([3,2,1])
})
test('check if it returns an alphabetical array', () => {
  expect(myFunction([4,2,3,1])).toEqual([4,3,2,1])
})
