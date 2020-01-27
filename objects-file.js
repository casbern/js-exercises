// 1. Imagine you need to describe a file on your harddisk as a Javascript object.
// What do we know about a file?
// The file name. Ex: objects-file.js
// The file full path. Ex: /Users/cah/js-training/objects-file.js
// The file size. in KB (KiloBytes). Ex: 200K
// The file type: js
// Make an object that can describe a file. Make three objects, each describing a different file

const files = [
{
  name: "exercises.js",
  path: "/Users/cah/js-training/exercise.js",
  size: 400, 
  type: "js"
},
{
  name: "objects.js",
  path: "/Users/cah/js-training/objects.js",
  size: 185, 
  type: "js"
},
{
  name: "array.js",
  path: "/Users/cah/js-training/arrays.js",
  size: 240, 
  type: "js"
}]

// ==== FUNCTION CALL ====

console.log(objectKeys(files[0]))
console.log("---------")
console.log(keysIntoArray(files[0]))
console.log("---------")
console.log(objectProperties(files[0]))
console.log("---------")
console.log(arrayOfObjects(files))
console.log("---------")

// ==== EXERCISES ====

//2. Make a function that iterate through the properties of ONE object and console logs the properties (keys) of that object. one property at a time
function objectKeys(obj) {
  for (key in obj ) {
    console.log(key)
  }
}

//3. Modify the function at 2. to save those properties (keys) in an array and return that array
function keysIntoArray(obj){
  const output = [] 
  for (key in obj) {
    output.push(key)
  }
  return output
}

//4. Make a function that iterates through the properties of ONE object and console logs each property and value.
function objectProperties(obj) {
  for (key in obj) {
    console.log(key, obj[key])
  }
}

//5. Make an array with the three objects -- (It is done)


//6. Make a function that receives the array with the three file objects (or more) and returns you the file with the biggest size.
function arrayOfObjects(arr) {
  let output = 0
  for (item of arr) {
    if (item.size > output) {
      output = item.size
    }
  }
  return output
}