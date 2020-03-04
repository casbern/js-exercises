//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const test = {
  p: 42,
  q: true
}

const {p,q} = test

console.log(test)
console.log(p)
console.log(q)

//* ARRAYS

const [a,b,c] = [1,2,3]

console.log(a)

const x = [1, 2, 3, 4, 5];
const [y, z] = x;
console.log(y); // 1
console.log(z); // 2