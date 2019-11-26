//create an empty array

//using a for loop insert three functions logging their corresponding index inside the array.

//provide the solution in the both ES5 and ES6

console.log('%c--- Below is ES6 results ---', 'color: orange;');

//ES6
let arr = [];

for(let i = 0; i < 3; i++ ) {
    //arr[i] = function(){
    //    console.log(i);
    //};
    arr.push(function () {
        console.log(i);
    });


}

arr[0]();
arr[1]();
arr[2]();

console.log('%c --- Below is ES5 results ---', 'color: orange;');

//ES5 (you need to use closures)

var bikes = [];

function f(x) {
    return function() {
        console.log(x);
    };
}

for(var i = 0; i < 3; i++) {
    bikes[i] = f(i); 
}

bikes[0]();
bikes[1]();
bikes[2]();
