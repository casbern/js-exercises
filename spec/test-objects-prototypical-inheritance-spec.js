const objects = require('../objects-prototype-prototypical-inheritance')

describe('Check prototypes', function() {
  it('checks if the price is converted correctly', function() {
    expect(objects.course.priceToReais()).toEqual(56.9)
  })
  it('checks if it is string', function() {
    expect(objects.product.toString()).toEqual("Course Node with price 10 USD (56.9 reais)")
  })
  it('checks if the price is converted correctly to Tshirt objects', function () {
    expect(objects.tshirt.priceToReais()).toEqual(56.9)
  })
  it('checks if it is string', function() {
    expect(objects.tshirt.toString()).toEqual("Course Node with price 10 USD (56.9 reais)")
  })
})