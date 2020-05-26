const objects = require('../objects-prototype-prototypical-inheritance')

describe('Check if the price property', function() {
  it('checks if the price is converted correctly', function() {
    expect(objects.Course.price()).toBe(10)
})})