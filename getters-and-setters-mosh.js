/*const person = {
  firstName: "Mosh",
  lastName: "Hamedani",
  fullName() {
    return `${person.firstName} ${person.lastName}`
  }
};*/

//console.log(person.fullName());

//! problems with this approach. You can't change the full nameof the person
//! person.fullName = "John Smith"
//! You can't call full name as a property => person.fullName 

//! That is why we have getters and setters
// getters => acess properties
// setters => change or mutate them

//* REFACTORING

const person = {
  firstName: "Mosh",
  lastName: "Hamedani",
  get fullName() {
    return `${person.firstName} ${person.lastName}`
  },
  set fullName(value){
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

person.fullName = "John Smith";

console.log(person);