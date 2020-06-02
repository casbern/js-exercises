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

module.exports = {Product, Course, Tshirt}

const objects = [
  new Course(10, "Node", "Learn fast"),
  new Tshirt('S', 10, "JS", "Good course"),
  new Tshirt('M', 25, "Python", "The best course in the field"),
  new Product(10, "Node", "Learn fast")
]

for (let object of objects) {
  console.log(object.sell())
}

/* 
Method overriding means reimplementing a method in a child object.
Polymorphism is equals to many forms.
We have many implementations and many forms of the sell method.
*/
