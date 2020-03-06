function isValidAge(age) {
  if(age > 0 && age < 160) {
    return true
  } else {
    throw "Invalid age"
  } 
}

function isValidName(name) {
  if (typeof (name) == 'string') {
    return removeSpaces(name)
  } else {
    throw "Invalid name"
  }
}

function removeSpaces(name) {
  return name.trim(" ")
}


function Person(firstName, lastName, age) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age

}

const person = new Person("Monica", "Silva", 30)
const person1 = new Person("John", "Doe", 29)
const person2 = new Person("Denis", "Rogrigues", 10)