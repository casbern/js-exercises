'use strict' 
/* Strict mode changes the behavior of the "this" keyword.
When strict is used, it shows undefined. Otherwise the wiondow or global object will
be shown.
But for classes it will not work, so in fact you do not need the 'use strict' specified,
because by defult the body of classes are executed in the strict mode already.*/

/* CONSTRUCTOR */
function Person() {
  this.hi = function() {
    console.log(this) //The "this" keyword points to the Person object.
  }
}

const person = new Person()
person.hi() //* It is called "Method Call". When we are calling a method on an object.
/* When calling person.hi(), the result is the object Person */

const hi = person.hi
console.log(hi) //It console.log the 'hi function'.
hi() //* It is called "Function Call". It is a reference to this method.
/* "this" is now the window object in browser and global object in node.
We are calling this as a stand alone function that is not part of 
an object and when we call this in a stand alone function by default,
'this' will point to the global object which is window and global in node.*/

/* CLASS */
class Person1 {
  hi() {
    console.logo(this)
  }
}

const p = new Person1()
const pp = p.hi
pp() //Result is undefined.
/* Because by default the body of the class is executed in the 
strict mode */