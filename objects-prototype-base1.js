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

const parent1 = Object.getPrototypeOf(course1)
const parent2 = Object.getPrototypeOf(course2)

console.log('parent1')
console.log(parent1)

console.log('parent2')
console.log(parent2)

console.log('parent1 === parent2')
console.log(parent1 === parent2)

console.log(Object.getPrototypeOf(parent1) === Object.getPrototypeOf(parent2))

//* the object parent1 and parent2 are not equal. Each has its own address
//* in memory that is stored in a variable and when compared, those references are not the same.

//* Now, when we get the prototype of each, we see we have just one prototype loaded in memory, and both 
//* objects have it as its parent. They both use the same prototype.


// PART 2

function FancyCourse() {
  this.toString = function() {
    return this.title
  }

  this.convertPrice = function() {
    const usdPrice = this.price
    const realPrice = 5.24
    const result = usdPrice * realPrice
    return result.toFixed(2)
  }
}

const newCourse1 = new FancyCourse()
const newCourse2 = new FancyCourse()

const newParent1 = Object.getPrototypeOf(newCourse1)
const newParent2 = Object.getPrototypeOf(newCourse2)