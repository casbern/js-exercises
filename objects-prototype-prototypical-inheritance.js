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

Course.prototype.toString = function() {
  return `Course "JS object" with price ${this.price} USD (${this.priceToReais()} reais)`
}
 
// ==== 

function Tshirt(size, price, title) {
  this.size = size
  this.price = price
  this.title = title
}

Tshirt.prototype = Object.create(Product.prototype)
Tshirt.prototype.constructor = Tshirt

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
  const reaisRate = 5.69
  const finalReaisPrice = this.price * reaisRate
  return Math.round(finalReaisPrice * 100) / 100
}

Product.prototype.toString = function() {
  return `Course ${this.title} with price ${this.price} USD (${this.priceToReais()} reais)`
}


// new Course.prototype.constructor() is equal to new Course()
// Because we reset the courseBase (or Course.prototype) 
// to have the productBase (Product.prototype) as its parent.
// So, if we want to create a new course object, the prototype will inherit from the productBase.
// That is important to reset the constructor.

const course = new Course(10, "Node", "Learn fast")
const product = new Product(10, "Node", "Learn fast")
const tshirt = new Tshirt('S', 10, "Node")

module.exports = {course, product, tshirt}


//console.log(module.exports.product.prototype)