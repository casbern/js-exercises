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

function showInfo(persons) {
  for (person of persons) {
    console.log(`Name: ${person.name}`)
    console.log(`Age: ${person.age}`)
  }
}

console.log(showInfo(persons))