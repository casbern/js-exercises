//const {Course} = require("./objects-import-commonjs-course2.js")
//* It was used exports.something = something. It exports as an object.
//* It was used the destructor, so I have just the function.

const Course = require("./objects-import-commonjs-course2.js")
//* It was used module.exports = something.
//* This one does not export as an object.

const c = new Course("Learn more JS", "Learn JS fast in a nice and fun way", "$40,99", ["JS", "fun"])
const d = new Course("Physical Exercises", "Be healthier with us!", "$99,99", ["push-ups", "happiness"])
const e = new Course("Intensive Bootcamp", "Learn how to code fast", "$240,50", ["HTML", "CSS", "JS"])

console.log(c)
console.log(d)
console.log(e)