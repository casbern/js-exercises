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

console.log(Object.getPrototypeOf(course1) === Object.getPrototypeOf(course2))

//* Each JS object, by default, has as prototype (has as parent) the builtin Object object (base object)




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

const fancyCourse1 = new FancyCourse()
const fancyCourse2 = new FancyCourse()

Object.setPrototypeOf(course1, fancyCourse1)
Object.setPrototypeOf(course2, fancyCourse2)

