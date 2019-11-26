// ES6

let x = 1;

x = 2; // The new value will be 2.

//let x = 5; // It will throw an error. 

console.log(x);

/* You can re-assign to the declared "let" variable another value, but you CAN NOT re-declare the same variable. 
This would be possible with the "var" */

// SCOPE

function add(y){
    return y + x;
}
console.log(add(3)); // 5

/* LET variable can be accessed from inside functions if declared
in their outer environment just like var. */

function add2(y) {
    let x = 2;
    return y + x;
}

console.log(add2(6)); //8

// Hoisting
//console.log(z);
//let z = 10; // variables declared using ES6 are not hoisted, in contrast to the "var", so you'll get an error.


// Temporal dead zone

let z;
console.log(z);
z = 1;
console.log(z);