function Course(price, title, description) {
  Product.call(this, price, title, description)
  this.makeTitle = function() {
    return `This ${this.title} course price is ${this.price}.`
  }
}

Course.prototype = Object.create(Product.prototype)
Course.prototype.constructor = Course //reset the course prototype.
 
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

function Tshirt(size, price, title, description) {
  this.size = size
  Product.call(this, price, title, description)
}

Tshirt.prototype = Object.create(Product.prototype)
Tshirt.prototype.constructor = Tshirt

// ====

const course = new Course(10, "Node", "Learn fast")
const product = new Product(10, "Node", "Learn fast")
const tshirt = new Tshirt('S', 10, "JS", "Good course")

console.log(tshirt)

module.exports = {course, product, tshirt}

/* How to make tshirt object inherit price, title and descriptions properties
of the Product constructor?
We need to use inside the constructor we want to add these properties:
Product.call(this, price, title, description).

The call() is a method on any JS function, since JS functions are objects.
The call() allows for a function/method belonging to one object to be assigned
and called for a different object.
When you use call() on a function, you pass an object as a first argument to call() 
and that object will become the current object, attached to this, inside the called function.
This is only relevant if the function called is used as a method, because then it will refer 
to a current object via this.

The 'new' keyword does 3 things:
1. The 'new' operator creates a new empty object.
2. Then set 'this' to point to that object.
3. That new object will be returned from this constructor.

If you do not use the 'new' operator, 'this' by default will point to the 
global object which is window in the browser and global in node.
 */