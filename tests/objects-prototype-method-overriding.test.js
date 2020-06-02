const {Product, Course, Tshirt} = require('../objects-prototype-method-overriding.js')


test('checks if toString is correct for product', () => {
  const product = new Product(20, "Book", "Read this book and learn")
  expect(product.sell()).toEqual("The product with the title Book has been sold at price 20")
})
test('checks if toString is correct for course', () => {
  const course = new Course(10, "Node course", "Make this course and learn node")
  expect(course.sell()).toEqual([
    "The product with the title Node course has been sold at price 10",
    "The author for the course Node course needs to be paid his author fee."
  ])
})
test('checks if toString is correct for tshirt', () => {
  const tshirt = new Tshirt('S', 30, "JS t-shirt", "Awesome t-shirt")
  expect(tshirt.sell()).toEqual("The product with the title JS t-shirt has been sold at price 30")
})

