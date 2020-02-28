class Shape {
  move() {
    console.log("move")
  }
}

class Circle extends Shape {
  move() {
    super.move() //* now it will return the move parent
    console.log("circle move")
  }
}

const c = new Circle()

c.move()