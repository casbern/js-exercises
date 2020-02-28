const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius)

  }

  //* can access the value calling is as a property
  get radius() {
    return _radius.get(this)
  }

  //* being able to read _radius from outside
  // getRadius() {
  //   return _radius.get(this)
  // }

  // ** SETTER **
  set radius(value) {
    if (value <= 0) throw new Error ("Invalid radius!")

    _radius.set(this, value)

  }
}

const c = new Circle(1); //* new object called c
//c.getRadius() //* it will show the value of _radius

console.log(c.radius)