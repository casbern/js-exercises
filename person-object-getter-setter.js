function Person() {
  firstName = "firstName"
  lastName = "lastName"
  age = 0

  function removeSpaces (name) {
   return name.trim(" ")
 }

  Object.defineProperty(this, "firstName", {
    get: function() {
      return firstName
    },
    setter: function(firstName) {
      if (typeof (firstName) == 'string') {
        return removeSpaces(firstName)
      } else {
        throw new Error("Invalid name")
      }
    }
  })

  Object.defineProperty(this, "age", {
    get: function(){
      return age
    },
    setter: function(age) {
      if(age > 0 && age < 160) {
        return age
      } else {
        throw "Invalid age"
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
