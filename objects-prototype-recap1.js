const person1 = {
  name: "Maria",
  age: 50
}

const person2 = {
  name: "João",
  age: 14
}

const proto1 = Object.getPrototypeOf(person1)
const proto2 = Object.getPrototypeOf(person2)

console.log(proto1 === proto2) //true

//They have the same prototype that is the baseObject. 

//person1.age.toString() works because toString() is part of baseObject and
//all literal objects inherit from it. Inherit its properties and methods.

//In the objects.prototype.base1 exercise we also have two literal objects,
//however, we are setting an object derived from a constructor to be the parent
//of this literal object called course1 and course2.
//So, the parent of both literal objects in that case will be fancyCourse1 and
//fancyCourse2. 
//course1 and course2 will have access to all properties and methods inside those
//objects that were made from the constructor.

//Now important to remember the parent of the fancyCourse1 and fancyCourse2 will be
//is the property prototype that is within the constructor. This property
//will be the parent of all objects that are born using that constructor.
//The object base this time will be the grandparent of this object.