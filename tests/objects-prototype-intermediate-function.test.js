const {Product, Tshirt, Course} = require('../objects-prototype-intermediate-function-inheritance')

test('checks if toString is correct for course', () => {
  const course = new Course(10, "Node", "Learn fast")
  expect(course.toString()).toEqual("Course Node with price 10 USD (56.9 reais)")
})
test('checks if toString is correct for tshirt', () => {
  const tshirt = new Tshirt('S', 10, "JS", "Good course")
  expect(tshirt.toString()).toEqual("Tshirt JS with price 10 USD (56.9 reais)")
})
test('checks if toString is correct for product', () => {
  const product = new Product(10, "Node", "Learn fast")
  expect(product.toString()).toEqual("Product Node with price 10 USD (56.9 reais)")
})
