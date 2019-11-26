function sum(a,b) {
  return a + b;
}

function multiply(a,b) {
  return a * b;
}

// exports {prop: value, prop2: value2}

module.exports = 'alabala'; //for one only thing. whatevr you put here will be the result of the require call

// exports -> {} it is a builtin empty obj added by Node
// exports.sum = sum;
// exports.multiply = multiply; //for multiple things. exports obj will be result of the require call.
// {sum: function sum(a, b) {...} }

console.log(exports);