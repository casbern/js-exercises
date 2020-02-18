
function Shape (color) {
  this.color = color
}

Shape.prototype.duplicate = function () {
  console.log("duplicate")
}

Circle.prototype = Object.create(Shape.prototype)
Circle.prototype.constructor = Circle //reset the Circle constructor

function Circle (radius,color) {

  Shape.call(this, color) //this is how you call the super constructor. 
  //now circle can also inherit the color property

  this.radius = radius
}

Circle.prototype.draw = function() {
  console.log("draw")
}


const shape = new Shape()
const circle = new Circle(1, 'black')
