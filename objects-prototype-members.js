function Course(price, title, description) {
  this.price = price
  this.title = title
  this.description = description
}

Course.prototype.priceToReais = function() {
  const reaisPrice = 5.69
  return (this.price * reaisPrice).toFixed(2)
}

Course.prototype.toString = function() {
  return `Course "JS object" with price ${this.price} USD (${this.priceToReais()} reais)`
}
 
const course = new Course(10, "Node", "Learn fast")

const descriptor = Object.getOwnPropertyDescriptor(course, "price")
const descriptor1 = Object.getOwnPropertyDescriptor(Course.prototype, "toString")
console.log(descriptor1)



//* When we access a property or a method on an object. JS engine first look at 
//* the object itself, if it can't find that property or method, it'll look at the prototype 
//* of that object.
//* It means we can take a property or method and put it on its prototype, so all
//* created objects will access it. We'll have a single instance of that method or property 
//* in their prototype.

//* Two kinds of properties and methods:
//* Instances, Properties and Methods. Members.
//* Prototype members.