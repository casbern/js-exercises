class Person {
  constructor(initialAge) {
    //let age = 0

    if(initialAge > 0) {
      this.age = initialAge
    } else {
      this.age = 0
      console.log("Age is not valid, setting age to 0.")
    }
  }

  amIOld() {
    if(this.age < 13) {
      return "You are young."
    } else if (this.age > 13 && this.age < 18) {
      return "You are a teenager."
    } else {
      return "You are old."
    }
  }

  yearPasses() {
    return this.age++
  }
}

const person = new Person(0)

console.log("amIOld", person.amIOld())
console.log("yearPasses", person.yearPasses())