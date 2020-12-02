const myFunction = require('../swap-obj-keys-values.js')

test('swap the keys / values of an object', () => {
  expect(myFunction({ bear: 'animal', sow: 'female', boar: 'male', cub: 'young'}) ).toStrictEqual({ animal: 'bear', female: 'sow', male: 'boar', young: 'cub' })
})
test('swap the keys / values of an object', () => {
  expect(myFunction({ sheep: 'animal', ewe: 'female', ram: 'male', lamb: 'young'}) ).toStrictEqual({ animal: 'sheep', female: 'ewe', male: 'ram', young: 'lamb' })
})
test('swap the keys / values of an object', () => {
  expect(myFunction({ Berlin: 'city', Germany: 'country'})).toStrictEqual({ city: 'Berlin', country: 'Germany' })
})