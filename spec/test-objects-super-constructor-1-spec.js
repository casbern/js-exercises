const objects = require('../objects-prototype-calling-the-super-constructor')

describe('Check the tshirt object is correctly', function() {
  it('checks if the size property is set', function() {
    expect(objects.tshirt.size).toEqual("S")
  })
  it('checks if price is set', function() {
    expect(objects.tshirt.price).toEqual(10)
  })
  it('checks if title is set', function() {
    expect(objects.tshirt.title).toEqual("JS")
  })
  it('checks if description is set', function() {
    expect(objects.tshirt.description).toEqual("Good course")
  })
})