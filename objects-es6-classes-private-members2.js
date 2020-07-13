const _firstName = Symbol()
const _lastName = Symbol()
const _whoAmI = Symbol()

class Person {
  constructor(firstName, lastName, sex, age) {
    this[_firstName] = firstName
    this[_lastName] = lastName
    this.sex = sex
    this.age = age
  }

  [_whoAmI]() {
    return `I am ${this[_firstName]} ${this[_lastName]}, ${this.age}, ${this.sex}`
  }

  toString() {
    return this[_whoAmI]()
  }
}


const person = new Person("Ana", "Furtado", "F", 58)
