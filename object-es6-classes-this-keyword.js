'use strict' 
/* Strict mode changes the behavior of the "this" keyword.
When we call a method on an object, like person.hi() then we say the method is connected
to an object, in this case the person object. This means that inside the method 'this' keyword
refers to the current object, in our case person object.
In case we assign the method to a variable and call that variable on its own, like - const hi = person.hi
then when we call 'hi' that is a function call and it should not be attached to an object.
Use strict makes sure JS has the correct behavior and does not attached 'this' to an object in this 
case (function call) and 'this' becomes undefined.
If we do not use strict 'this' will be attached to the global object in node or window object in browser.

When using classes the 'use strict' is used, implied, because by defult the body of classes are 
executed in the strict mode already.*/

/* CONSTRUCTOR */
function Person() {
  this.hi = function() {
    console.log(this) //The "this" keyword points to the Person object.
  }
}

const person = new Person()
person.hi() //* It is called "Method Call". When we are calling a method on an object.
/* When calling person.hi(), 'this' is always the current object, in our case person */

const hi = person.hi
console.log(hi) //It console.log the 'hi function'.
hi() //* It is called "Function Call". It is a reference to this method.
/* "this" is now the window object in browser and global object in node.
We are calling this as a stand alone function that is not part of 
an object and when we call it in a stand alone function by default,
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