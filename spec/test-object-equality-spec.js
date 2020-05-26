const objects = require('../objects-equality')

describe('Two objects equality', function() {
  it('checks if two objects are equal', function() {
    expect(objects.objA).toEqual(objects.objB) //Compare the values.
    //expect(objects.objA).toBe(objects.objB) //Compare the references.
  })
})