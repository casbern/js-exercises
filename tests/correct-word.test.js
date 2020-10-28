const myFunction = require('../correct-word')

test('check if the correct word will be delivered', () => {
  expect(myFunction('bnchmf')).toEqual('coding')
})
test('check if the correct word will be delivered', () => {
  expect(myFunction('bgddrd')).toEqual('cheese')
})
test('check if the correct word will be delivered', () => {
  expect(myFunction('sdrshmf')).toEqual('testing')
})
test('check if the correct word will be delivered', () => {
  expect(myFunction('byrrhy')).toEqual('cassia')
})
