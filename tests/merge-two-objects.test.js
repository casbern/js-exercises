const myFunction = require('../merge-two-objects.js')

test('return new object', () => {
  expect(myFunction({ continent: 'Europe', country: 'Germany' }, { planet: 'Earth', country: 'Munich', state: 'Bavaria' }) ).toStrictEqual({ continent: 'Europe', country: 'Germany', planet: 'Earth', state: 'Bavaria', city: 'Munich'} )
})
test('return new object', () => {
  expect(myFunction({ continent: 'North America', country: 'USA' }, { planet: 'Earth', country: 'Los Angeles', state: 'California' }) ).toStrictEqual({ continent: 'North America', country: 'USA', planet: 'Earth', state: 'California', city: 'Los Angeles'})
})
