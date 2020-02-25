//* Defining the class constructor 
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // draw() { //* ==> mathod added to the prototype of the circle object.
    //     console.log("draw")
    // }

    static parse(str) { //* ==> static methods are utility functions not tied to a particular object.
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
    }
}

//* Creating circle objects

//const circle = new Circle(1)
const circle = Circle.parse('{"radius": 1}')
console.log(circle)