const person = {
  name: "Paulo",
  age: 20
}

const my_arr = [
  {
    name: "Ieda",
    age: 52
  }
]

function Course() {
  this.name = "Node",
  this.sayCourse = function() {
    return this.name
  }
}

const course = new Course()

// ======

const personProto = Object.getPrototypeOf(person) //or person.__proto__
const personObjProto = Object.prototype

const my_arrProto = Object.getPrototypeOf(my_arr)
const arrayObjProto = Array.prototype

const courseProto = Object.getPrototypeOf(course)
const courseObjProto = Course.prototype

//A literal object has a prototype that is its parent.
//This literal object is created using the object constructor function. This constructor
//also has a protype property and this prototype property is used as the prototype for all
//objects created by this constructor.

//The parent for the object created and the prototype for the constructor are equal.

