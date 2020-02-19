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

//!It is very import to use this code after extend, because we are
//! reseting the prototype.

Circle.prototype.duplicate = function () {

  //* calling the parent duplicate implementation
  Shape.prototype.duplicate.call(this)

  console.log("duplicate circle")
}

const circle = new Circle(1)