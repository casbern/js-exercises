
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype)
  Child.prototype.constructor = Child
}
function Shape(color) {
  this.color = color
}

Shape.prototype.duplicate = function () {
  console.log("duplicate")
}


function Circle(radius, color) {

  Shape.call(this, color) //this is how you call the super constructor. 
  //now circle can also inherit the color property

  this.radius = radius
}

//! this lines will go inside the function
//Circle.prototype = Object.create(Shape.prototype)
//Circle.prototype.constructor = Circle //reset the Circle constructor

//! now tou call the function
extend(Circle, Shape)

Circle.prototype.draw = function () {
  console.log("draw")
}

/* SQUARE THAT INHERITS FROM THE SHAPE */

function Square(size) {
  this.size = size
}

//! The problem with this way is that each time we have a new object
//! we will have them and it makes the code noise.
//! The solution is to store them in a function that you can reuse.

//Square.prototype = Object.create(Shape.prototype)
//Square.prototype.constructor = Square //reset the Circle constructor


const sq = new Square(10)

const shape = new Shape()
const circle = new Circle(1, 'black')