function Course(price, title, description) {
  this.price = price
  this.title = title
  this.description = description
  this.makeTitle = function() {
    return `This ${this.title} course price is ${this.price}.`
  }
}

Course.prototype.priceToReais = function() {
  const reaisPrice = 5.69
  return (this.price * reaisPrice).toFixed(2)
}

Course.prototype.toString = function() {
  return `Course "JS object" with price ${this.price} USD (${this.priceToReais()} reais)`
}
 
const course = new Course(10, "Node", "Learn fast")

//Returns instance members. The properties of an object made from a constructor.
const ownMembers = Object.keys(course)
module.exports.ownMembers = ownMembers
//console.log(ownMembers)

//Returns all members (instace + protytpe)
const allMembers = []
module.exports.allMembers = allMembers
for (let key in course) {
  allMembers.push(key)
}
//console.log(allMembers)


