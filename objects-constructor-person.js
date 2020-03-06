function isValidAge(age) {
  if (age < 0 || age > 160) {
    return "Type a valid age."
  }
}

function isValidName(firstName, lastName) {
  return typeof (firstName, lastName) == 'string'
}

function removeSpaces(name) {
  const removeSpaces = name.trim(" ")
  return removeSpaces
}


function Person(firstName, lastName, age) {
  isValidName(firstName, lastName)
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
}

const person = new Person("Monica", "Silva", 30)
const person1 = new Person("John", "Doe", 29)
const person2 = new Person("Denis", "Rogrigues", 10)