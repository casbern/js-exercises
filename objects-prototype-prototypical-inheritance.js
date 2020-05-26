function Course(price, title, description) {
  this.price = price
  this.title = title
  this.description = description
  this.makeTitle = function() {
    return `This ${this.title} course price is ${this.price}.`
  }
}
//Inherit the prototype of product constructor.
//It will show courseBase ten productBase.
Course.prototype = Object.create(Product.prototype)
Course.prototype.constructor = Course //reset the course prototype.

Course.prototype.pricePhrase = function() {
  return `Course "JS object" with price ${this.price} USD (${this.priceToReais()} reais)`
}
 
// ==== 

function Product(price, title, description) {
  this.price = price
  this.title = title
  this.description = description
  this.makeTitle = function() {
    return `This ${this.title} course price is ${this.price}.`
  }
}

Product.prototype.priceToReais = function() {
  const reaisPrice = 5.69
  return (this.price * reaisPrice).toFixed(2)
}



// new Course.prototype.constructor() is equal to new Course()
// Because we reset the courseBase prototype to become productBase prototype.
// So, if we want to create a new course object, the prototype will be the productBase one.
// That is important to reset the constructor.

function Tshirt(size) {
  this.size = size
}

Tshirt.prototype = Object.create(Product.prototype)
Tshirt.prototype.constructor = Tshirt

//const course = new Course(10, "Node", "Learn fast")
//const product = new Product(10, "Node", "Learn fast")
//const tshirt = new Tshirt('S')

module.exports = {
  course: new Course(10, "Node", "Learn fast"),
  product: new Product(10, "Node", "Learn fast"),
  tshirt: new Tshirt('S')
}

console.log(module)