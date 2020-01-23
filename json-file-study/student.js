const fs = require('fs')

// synchronous

// let rawdata = fs.readFileSync('student.json')
// let student = JSON.parse(rawdata)
// console.log(student)
// console.log(rawdata)

//asynchronous

// fs.readFile('student.json', (err, data) => {
//   if (err) throw err;
//   let student = JSON.parse(data);
//   console.log(student);
// });

// console.log('This is after the read call');

//require

let jsonData = require('./student.json')
console.log(jsonData)