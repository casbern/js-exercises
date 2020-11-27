const myFunction = require('../accessing-obj-properties-three.js')

test('check if the key of the obj is taken', () => {
  expect(myFunction({ continent: 'Asia', country: 'Japan'}, 'continent')).toEqual('Asia')
})
test('check if the key of the obj is taken', () => {
  expect(myFunction({ country: 'Sweden', continent: 'Europe'}, 'country')).toEqual('Sweden')
})
