function Person() {
  let firstName, lastName, age

  function removeSpaces (name) {
   return name.trim(" ")
 }

  Object.defineProperty(this, "firstName", {
    get: function() {
      return firstName
    },
    set: function(value) {
      if (typeof (value) == 'string') {
        firstName = value
        removeSpaces(firstName)
      } else {
        throw new Error("Invalid name")
      }
    }
  })

  Object.defineProperty(this, "age", {
    get: function(){
      return age
    },
    setter: function(value) {
      if(!value > 0 && !value < 160) {
        throw new Error("Invalid age")
      } else {
        age = value
      } 
    }
  })
}

const john_doe = new Person()
john_doe.firstName = '  John  '
//john_doe.lastName = 'Doe' 
//john_doe.age = 23 
//john_doe.name = 'Jonica Donica' 

console.log(john_doe.firstName)
