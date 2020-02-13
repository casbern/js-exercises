function Circle(radius) { //constructor function
  //instance members
  this.radius = radius
  this.move = function() {
    console.log("move")
  }
}

//prototype members
Circle.prototype.draw = function() {
  this.move()
  console.log("draw")
}

const circle = new Circle(1) //these are new objects created from constructor function
const circle1 = new Circle(2)

// Circle.prototype === circle.__proto__ //both of them has the same prototype.

Circle.prototype.toString = function () {
  return "Circle with radius" + this.radius
} //this one will be used because it is more accessible