const course1 = {
  title: "Learn how to code",
  author: "Mosh",
  price: 10
}

const course2 = {
  title: "Learn JS",
  author: "Mosh",
  price: 20
}

//! How to make it???
//! parent1 make it to be the prototype (parent) of course1
//! parent2 make it to be the prototype (parent) of course2

const parent1 = {}
const parent2 = {}

console.log('parent1')
console.log(parent1)

console.log('parent2')
console.log(parent2)

console.log('parent1 === parent2')
console.log(parent1 === parent2)

console.log(Object.getPrototypeOf(parent1) === Object.getPrototypeOf(parent2))

//! This will prove who is parent1, who is parent2 and if they are equals.
//! Think of the signification of parent1/parent2. Who is it?

//* the object parent1 and parent2 are not equal. Each has its own address
//* in memory that is stored in a variable and when compared, those references are not the same.

//* Now, when we get the prototype of each, we see we have just one prototype loaded in memory, and both 
//* objects have it as its parent. They both use the same prototype.


// PART 2

function FancyCourse(course) {
  this.toString = function() {
    return course.title
  }

  this.convertPrice = function() {
    const usdPrice = course.price
    const realPrice = 5.24
    const result = usdPrice * realPrice
    return result.toFixed(2)
  }
}

const newCourse1 = new FancyCourse(course1)
const newCourse2 = new FancyCourse(course2)