function Circle(radius) {
  this.radius = radius
}

function Person(height) {
  this.height = height 
}

const circle = new Circle(10)
console.log(circle.radius)

const person = new Person(1.40)
console.log(person.height)

// ===== TAKEAWAYS =====
// Prototype or the parent of myObject.
// Object.getPrototypeOf(circle) is the same as Circle.__proto__

// Constructors also have a prototype property.
// Circle.prototype is an object that will be used as the parent for 
// for objects created by the circle constructor.

// The parent of the object is equal to the prototype of the Object that was 
// used to build it.