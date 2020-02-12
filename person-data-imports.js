const personData = require("./person-data.js")
console.log(personData)

const persons = [{
  nome: "Patricia",
  age: 20,
  sex: "feminine"
}]

console.log(personData(persons, "Patricia"))


