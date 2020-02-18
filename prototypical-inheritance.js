// Creating you own prototypical inheritance

function Shape () {

}

Shape.prototype.duplicate = function () {
  console.log("duplicate")
}

function Circle (radius) {
  this.radius = radius
}

Circle.prototype.draw = function() {
  console.log("draw")
}

Object.create(Shape.prototype)
Circle.prototype = Object.create(Shape.prototype)

const shape = new Shape()
const circle = new Circle(1)
