const objects = require('../objects-prototype-calling-the-super-constructor')

describe('Check the objects from the prototype', function() {
  it('checks if toString is correct for course', function() {
    expect(objects.course.toString()).toEqual("Course Node with price 10 USD (56.9 reais)")
  })
  it('checks if toString is correct for tshirt', function() {
    expect(objects.tshirt.toString()).toEqual("Course JS with price 10 USD (56.9 reais)")
  })
  it('checks if toString is correct for product', function() {
    expect(objects.product.toString()).toEqual("Course Node with price 10 USD (56.9 reais)")
  })
})