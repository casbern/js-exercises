class Shape {
  constructor (color) {
    this.color = color
  }

  move() {
    console.log("move")
  }
}

class Circle extends Shape {
  constructor(color) {
    super(color)
  }
  draw() {
    console.log("draw")
  }
}

const c = new Circle("red")
c.draw()
c.move()
console.log(c.color)