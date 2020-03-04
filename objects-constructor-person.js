function Person(firstName, lastName, age) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age

  this.nameValidation = function(name) {
    if(typeof(name) !== 'string') {
      return "Type a valid name"
    }
    return "ok"
  }

  this.emptySpaces = function(name) {
    const withoutSpaces = name.trim(" ")
    return withoutSpaces
  }

  this.ageValidation = function() {
    if(age < 0 || age > 160) {
      return "Type a valid age."
    }
    return "ok"
  }

}

const person = new Person("Monica", "Silva", 30)
const person1 = new Person("John", "Doe", 29)
const person2 = new Person("Denis", "Rogrigues", 10)

