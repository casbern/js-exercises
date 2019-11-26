//Why do you need to create arrays from other objects?

let arr = [1,2,3];
console.log(arr.map(x => x * 2));

let str = "hello"; // You can't try with a string, because map is not attached to a string.
console.log(arr.map);
console.log(str.map); //You'll get undefined.

//ES5 -- array from string

console.log(Array.prototype.map.call(str, function(x){
    return x + 'a';
}));

//ES5 -- array from collection

const collection = document.getElementsByClassName('blue');
console.log(collection);

console.log(Array.prototype.slice.call(collection,1,3));

//Create an array from a collection

console.log(Array.from(collection));

//Create an array from a string

console.log(Array.from(str));

//Create an array from function arguments

function g(x,y){
    console.log(arguments);
    console.log(Array.from(arguments));

}

g(1,2);

//Use the optional map function

let str2 = 'strawberry';
console.log(Array.from(str2, x => x + ','));
console.log(Array.from([1,2,3], x => x * 2));

//From any object with a length property

const obj = { length: 3};
console.log(Array.from(obj));
console.log(Array.from(obj, value => 1));
console.log(Array.from(obj, (value, index) => index * 2));

//Create an array from Sets and Maps (iterable objects)

let mySet = new Set();
mySet.add('John');
mySet.add(1);
console.log(mySet);
console.log(mySet.size);
console.log(Array.from(mySet));

const myMap = new Map([[1,2], [3,4]]);
console.log(myMap);
console.log(Array.from(myMap));