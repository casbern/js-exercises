const { Product, Course, Tshirt } = require('../objects-es6-classes-base.js')

//Product class
test('It verifies the result of toString() in the Product class', () => {
  const product = new Product(50, "React", "Learn fast")
  expect(product.toString()).toEqual("Product React with price 50 USD")
}) 
test('It verifies the result of priceToReais() in the Product class', () => {
  const product = new Product(50, "React", "Learn fast")
  expect(product.priceToReais()).toEqual(284.50)
}) 
test('It verifies the result of sell() in the Product class', () => {
  const product = new Product(50, "React", "Learn fast")
  expect(product.sell()).toEqual("The product with the title React has been sold at price 50")
}) 

//Course class
test('It verifies the result of toString() in the Course class ', () => {
  const course = new Course(10, "Node", "Learn fast")
  expect(course.toString()).toEqual("Course Node with price 10 USD")
}) 
test('It verifies the result of getAuthor() in the Course class ', () => {
  const course = new Course(10, "Node", "Mosh", "Learn fast")
  expect(course.getAuthor()).toEqual("The name of the author is Mosh.")
}) 

//Tshirt class
test('It verifies the result of toString() in the Course class ', () => {
  const tshirt = new Tshirt('M', 25, "Python", "The best course in the field")
  expect(tshirt.toString()).toEqual("Tshirt Python with price 25 USD")
}) 
test('It verifies the result of getSize() in the Course class ', () => {
  const tshirt = new Tshirt('M', 25, "Python", "The best course in the field")
  expect(tshirt.getSize()).toEqual("The size is M")
}) 