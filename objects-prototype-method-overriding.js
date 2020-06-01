function extend(Child, Parent) { 
  //the parameters have uppercase because we expect constructors.
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

Product.prototype.sell = function() {
    return `The product with the title ${this.title} has been sold at price ${this.price}`
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

extend(Course, Product) //we are resetting the prototype.


Course.prototype.sell = function() {
    return [
        Product.prototype.sell.call(this),
        `The author for the course ${this.title} needs to be paid his author fee.`
    ]
}


// ==== 

function Tshirt(size, price, title, description) {
  this.size = size
  Product.call(this, price, title, description)
}

extend(Tshirt, Product)


// ====

const course = new Course(10, "Node course", "Make this course and learn node")
const product = new Product(20, "Book", "Read this book and learn")
const tshirt = new Tshirt('S', 30, "JS t-shirt", "Awesome t-shirt")

module.exports = {course, product, tshirt}

/* When the implementation in the parent may not be the ideal for the child
you can change its implementation in the child.
We need to redifine the method where we want it to be different. 
When we access a property or a method on an object, JS engine walks up the
prototype chain and picks the first implementation.
Even tough we have implemented the sell method both on the parent and child object,
the child object will be used.*/

