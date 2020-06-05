//Function Declaration
example()
function example() {
  console.log('example 1')
}

//Function Expression
example2()
const example2 = function() {
  console.log('example 2')
}





/*
Function Declaration Syntax
=> function sayHello() {}

Function Expression Syntax
For convention, in function expressions, we should use
semi-collon at the end of the expression.
=> const sayGoodbye = function() {};

Function declarations are histed which means they are raised
to the top of the code. You can declare the function and 
called it before its declaration.

Function expressions are not hoisted, they are not raised to the top.

We can define classes using a declaration or an expression syntax.

Class Declaration 
=> class Circle {}

Class Expression
=> const Square = class {}

Class declarations or expressions are not hoisted.
*/

