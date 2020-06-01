const objects = require('../objects-prototype-calling-the-super-constructor')

test('checks if toString is correct for course', () => {
  expect(objects.course.toString()).toEqual("Course Node with price 10 USD (56.9 reais)")
})
test('checks if toString is correct for tshirt', () => {
  expect(objects.tshirt.toString()).toEqual("Tshirt JS with price 10 USD (56.9 reais)")
})
test('checks if toString is correct for product', () => {
  expect(objects.product.toString()).toEqual("Product Node with price 10 USD (56.9 reais)")
})
