const protoMembers = require('../objects-prototype-iterating-own-and-prototype-members')

describe("Prototype members", function() {
  it("own members are correct", function() {
    expect(protoMembers.ownMembers).toEqual(['price', 'title', 'description', 'makeTitle'])
  })
})