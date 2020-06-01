function extend(Child, Parent) { //the parameters have uppercase because we expect constructors.
  Child.prototype = Object.create(Parent.prototype)
  Child.prototype.constructor = Child
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
  const reaisRate = 5.69
  const finalReaisPrice = this.price * reaisRate
  return Math.round(finalReaisPrice * 100) / 100
}

Product.prototype.toString = function() {
  return `${this.constructor.name} ${this.title} with price ${this.price} USD (${this.priceToReais()} reais)`
}

// ====

function Course(price, title, description) {
  Product.call(this, price, title, description)
  this.makeTitle = function() {
    return `This ${this.title} course price is ${this.price}.`
  }
}

extend(Course, Product)

// ====

function Tshirt(size, price, title, description) {
  this.size = size
  Product.call(this, price, title, description)
}

extend(Tshirt, Product)


// ====

module.exports = {Product, Course, Tshirt}

console.log(module.exports)