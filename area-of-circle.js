// circle object literal syntax

const circle = {
  radius: 2,
  get area() {
    return Math.PI * this.radius * this.radius
  }
}

console.log(circle.radius)
console.log(circle.area)
console.log(circle)