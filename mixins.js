function Mixin(target, ...source) {
  Object.assign(target, ...source)
}

//* Create two objects
const canEat = {
  eat: function () {
    console.log("eating")
  }
}

const canWalk = {
  walk: function() {
    console.log("walking")
  }
}

//* Compose these two objects together to create a person object that can eat and walk.
//* To check it, we need to assign this line to a variable
//const person = Object.assign({}, canEat, canWalk) //! The properties and mathods that are inside canEat and canWalk will be assigned to the empty object.
//console.log(person)

//* Using a constructor
// function Person() {
//   console.log("hi")
// }

// Object.assign(Person.prototype, canEat, canWalk)

// const person = new Person()

//* Using Mixin
//* Make your code more readable. Added this on top of the code.

//* Instead of --> Object.assign()
//* We use --> mixin(Person.prototype, canEat, canWalk)
