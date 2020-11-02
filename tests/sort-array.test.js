const myFunction = require('../sort-array')

test('check if it returns an alphabetical array', () => {
  expect(myFunction(['b', 'c', 'd', 'a'])).toEqual(['a', 'b', 'c', 'd'])
})
test('check if it returns an alphabetical array', () => {
  expect(myFunction(['z', 'c', 'd', 'a', 'y', 'a', 'w'])).toEqual(['a', 'a', 'c', 'd', 'w', 'y', 'z'])
})
