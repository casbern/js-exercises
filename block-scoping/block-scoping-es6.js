let y = 2;

// Code block: Any code you  place inside curly braces.


{
    let x = 1;
}

{
   // console.log(x);
}

// Blocks in ES6 ae separeted with it own scope. The blocks don't communicate with each other.   
// If you had used a "var" instead, you would not get an error. You would have gotten the value. VAR is not block scoped.

// REDECLARATION

{
    let z =2;
}

{
    let z = 4; // Redeclaration is not a problem here, because each of them are in different scopes.
}

// Important Example:

let pass;

let mark = 80;
if(mark > 50) {
    pass = true;
} else {
    pass = false;
}

console.log(pass); // You will see an error.

// The error is caused because w are calling pass in a global scpe, while pass is inside a scope.

// To fix that you need to declare "pass" in a global scope as well.

//Functions and Block Scoping

// Create a separate scope first using a block.

// {
//     greet(); //hi
//     function greet() {
//         console.log('hi');
//     }
//     greet(); //hi

//     {
//         function greet() {
//             console.log('hello');
//         }

//         greet(); //hello - because it is inside this scope.
//     }

//     greet(); //hi
// }

// greet(); //hi


greet(); //hi
function greet() {
    console.log('hi');
}
greet(); //hi

{
    function greet() {
        console.log('hello');
    }

    greet(); //hello - because it is inside this scope.
}

greet(); //hello

// There is hoisting to functions and var, but there is not for let variables.

// Closures

// In ES5 you need to use Closures, but in ES6 you don't. Just use LET.

for (let i = 0; i < 0; i++) {
    document.getElementById(i).addEventListener('click', function(){
        console.log(i);
    })
}

// every function / iteration will catch a different i