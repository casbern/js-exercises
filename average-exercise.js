const persons = [
  {name: "Paulinha", sex: "F", age: 14},
  {name: "Gabi", sex: "F", age: 4},
  {name: "Chico", sex: "M", age: 56},
  {name: "Zefas", sex: "F", age: 24},
  {name: "Zé", sex: "M", age: 9},
]

function olderPerson(persons) {
  let age = 0
  for(person of persons) {
    if(person.age > age) {
      age = person.age
    }
  }
  console.log(`The oldest is ${age} years old`)
  return age
}
olderPerson(persons)

function youngPerson(persons) {
  let age = olderPerson(persons)
  for(person of persons) {
    if(person.age < age) {
      age = person.age
    }
  }
  console.log(`The youngest is ${age} years old`)
  return age
}
youngPerson(persons)

function averageAge(persons) {
  let add = 0
  for(person of persons) {
   add += person.age
  }
  let average = add / persons.length
  console.log(`The average of ages is ${average}`)
  return average
}
averageAge(persons)

function countM(persons) {
  let add = 0
  for(person of persons) {
   if(person.sex === "M")
    add += 1
  }
  console.log(`Number of men are ${add}`)
  return add
}
countM(persons)

function countF(persons) {
  let add = 0
  for(person of persons) {
   if(person.sex === "F")
    add += 1
  }
  console.log(`Number of women are ${add}`)
  return add
}
countF(persons)
