const sum = require('../../sum')

describe("The sum function", function() {
  it("adds two numbers correctly", function () {
    expect(sum(2,2)).toBe(4)
  })
});