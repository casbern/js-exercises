// ES5 we declare variables using the "var" word.

var x = 1; // global scope. It means it can be used through all the code.

// Variables were global scoped or function scoped. 

function add1(y) {
    var x = 2; // function scoped.
    return x + y;
}

console.log(add1(3)); //5

function add2(y) {
    return x + y;
}

console.log(add2(5)); //6

/* When the variable is not encountered inside the function scoped 
neither in the arguments, the parameter will be looked outside the function. */

// They were also hoisted.

/* Hoisted: It means that the variables are assigned as undefined if we called them before assigning it a value. */

console.log(z); // undefined because of hoisting.

var z = 1;

console.log(z);