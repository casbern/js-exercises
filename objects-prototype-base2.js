function Course() {
  this.whoAmI = function() {
    console.log("I am an object of type course")
  }

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

const course1 = new Course()
const course2 = new Course()

console.log("Console.log of course1")
console.log(course1)
console.log("Console.log of course2")
console.log(course2)

console.log("Equality between two objects")
console.log(course1 === course2)

console.log("Prototype of course1")
console.log(Object.getPrototypeOf(course1))

console.log("Prototype of course2")
console.log(Object.getPrototypeOf(course2))

console.log("Equality of prototype of course1 and course2")
console.log(Object.getPrototypeOf(course1) === Object.getPrototypeOf(course2))

//* Conclusion: The objects made from the same constructor have the same prototype.
//* course1.whoIAm() is not the same as course1.__proto__.whoIAm(), because 
//* in the first case, it's the object made from the constructor. The second case,
//* it is the prototype of the objects made from the constructor. And they are not the same.

console.log("Equality of the root object")
console.log(course1.__proto__.__proto__ === course2.__proto__.__proto__)
//* They are equal, both objects made from the constructor Course share the same parent and grandparent (root object).

// =============================================================== //

function FancyCourse(title, price) {
  this.title = title
  this.price = price
}

const fancyCourse1 = new FancyCourse("Mosh", 20)
const fancyCourse2 = new FancyCourse("Udemy", 10)

console.log("Prototype of fancyCourse1")
console.log(Object.getPrototypeOf(fancyCourse1))

console.log("Prototype of fancyCourse2")
console.log(Object.getPrototypeOf(fancyCourse2))

console.log("Equality of prototypes of FancyCourse1 and 2")
console.log(Object.getPrototypeOf(fancyCourse1) === Object.getPrototypeOf(fancyCourse2))

//* They are equal, as we saw in the other example, they share the same prototype.

console.log("console.log of FancyCourse1 title")
console.log(fancyCourse1.title)
console.log("console.log of FancyCourse2 title")
console.log(fancyCourse2.title)

console.log("console.log of FancyCourse1 price")
console.log(fancyCourse1.price)
console.log("console.log of FancyCourse2 price")
console.log(fancyCourse2.price)

//console.log(fancyCourse1.whoAmI())
//* It gives an error, because whoAmI() is not part of this object nor part of the prototype of this object.

console.log("console log of fancyCourse1.toString()")
console.log(fancyCourse1.toString()) //[object Object]
//* It works because of prototypical inheritance. JS looks first in the current obj, then in the prototype, then in the root object.

Object.setPrototypeOf(fancyCourse1, course1) //fancyCourse1 is the child and course1 will be the prototype.
Object.setPrototypeOf(fancyCourse2, course2)

console.log("console log of fancyCourse1.toString()")
console.log(fancyCourse1.toString())

console.log("console log of fancyCourse1.whoAmI()")
console.log(fancyCourse1.whoAmI()) 

console.log("console log of fancyCourse1.convertPrice()")
console.log(fancyCourse1.convertPrice()) 

console.log("console log of fancyCourse2.toString()")
console.log(fancyCourse2.toString())

console.log("console log of fancyCourse2.whoAmI()")
console.log(fancyCourse2.whoAmI()) 

console.log("console log of fancyCourse2.convertPrice()")
console.log(fancyCourse2.convertPrice()) 

//* Now the methods above all work with the object fancyCourse1 and 2, because all methods are
//* part of the prototype of this fancyCourse object.

console.log(fancyCourse1.__proto__)
console.log(fancyCourse1.__proto__.__proto__)
console.log(fancyCourse1.__proto__.__proto__.__proto__)
console.log(fancyCourse1.__proto__.__proto__.__proto__.__proto__) //It goes until the depth of 3. At this stage, the result is null.

//* The prototype of fancyCourse1 is now the object course1
//* Yes, you can call the method whoAmI() on fancyCourse1, because this method is now part of the prototype for this object.
//* fancyCourse1.__proto__.whoAmI() works because you are accessing this method from its prototype that now includes it.
//* course1.__proto__.whoAmI() does not work, because you are trying to access in its prototype a method that does not exist there. 
//* this method only exist in the object itself.

//* The prototype of fancyCourse1 now is course1, so this prototype includes all available methods in course1.
//* The prototype of course1 remains untouchable.

