function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype)
  Child.prototype.constructor = Child
}


function Shape() {
}

Shape.prototype.duplicate = function () {
  console.log("duplicate")
}


function Circle(radius, color) {
  Shape.call(this, color) 
  this.radius = radius
}

extend(Circle, Shape)


Circle.prototype.duplicate = function () {
  Shape.prototype.duplicate.call(this)
  console.log("duplicate circle")
}

function Square() {
  console.log("square")
}

extend(Square, Shape)

Square.prototype.duplicate = function () {
  Shape.prototype.duplicate.call(this)
  console.log("duplicate square")
}


const shapes = [
  new Circle(),
  new Square()
]

for(let shape of shapes) {
  shape.duplicate() //* if shape is a circle, the implementation of the circle object will be called.
}
