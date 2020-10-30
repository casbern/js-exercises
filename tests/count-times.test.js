const myFunction = require('../count-times')

test('check how many times the given letter appeared.', () => {
  expect(myFunction("m", "How many times does the character occur in this sentence?")).toEqual(2)
})
test('check how many times the given letter appeared.', () => {
  expect(myFunction("h", "How many times does the character occur in this sentence?")).toEqual(4)
})
test('check how many times the given letter appeared.', () => {
  expect(myFunction("?", "How many times does the character occur in this sentence?")).toEqual(1)
})
test('check how many times the given letter appeared.', () => {
  expect(myFunction("z", "How many times does the character occur in this sentence?")).toEqual(0)
})
