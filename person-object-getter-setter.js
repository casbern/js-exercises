function Person() {
  firstName = isValidName(firstName)
  lastName = isValidName(lastName)
  age = isValidAge(age)

  function removeSpaces (name) {
   return name.trim(" ")
 }

  Object.showName(this, "firstName", {
    get: function() {
      return firstName
    },
    setter: function(value) {
      if (typeof (value) == 'string') {
        return removeSpaces(value)
      } else {
        throw new Error("Invalid name")
      }
    }
  })
}

const john_doe = Person()
john_doe.firstName = '  John  '
john_doe.lastName = 'Doe' 
john_doe.age = 23 

john_doe.name = 'Jonica Donica' 

console.log(john_doe.name) 


// function isValidName (name) {
//   if (typeof (name) == 'string') {
//     return removeSpaces(name)
//   } else {
//     throw "Invalid name"
//   }
// }

// function removeSpaces (name) {
//   return name.trim(" ")
// }

// function isValidAge (age) {
//   if(age > 0 && age < 160) {
//     return age
//   } else {
//     throw "Invalid age"
//   } 
// }