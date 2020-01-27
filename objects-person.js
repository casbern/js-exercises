//1. Create a JavaScript object with the properties you'd like, that represents a person.
//Make three objects that each represents another person.

const persons = [{
    name: "Laura",
    age: 20,
    favoriteFood: "Pizza"
  },

  {
    name: "Pedro",
    age: 12,
    favoriteFood: "Lasanha"
  },

  {
    name: "Osmar",
    age: 72,
    favoriteFood: "Hamburguer"
  }
]

// 2. Create an array that holds the objects from task 1.
// 3. Iterate through the array, and console.log the first name of each person
// 4. Iterate through the array and console.log the age of each person.


function showInfo(persons) {
  for (person of persons) {
    console.log(`Name: ${person.name}`)
    console.log(`Age: ${person.age}`)
  }
}

console.log(showInfo(persons))