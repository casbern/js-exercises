const persons = [{
  name: "Luana",
  age: 18,
  sex: "feminine"
},
{
  name: "Ricardo",
  age: 74,
  sex: "masculine"
},
{
  name: "Rebeca",
  age: 55,
  sex: "feminine"
}]

function getPerson(persons,name) {
  
  for( person of persons) {

    if(person.name == name) {
      return person
    }
  }
     
    return "this name is not available"     
}

console.log(getPerson(persons,"Luana"))
console.log(getPerson(persons,"Ricardo"))
console.log(getPerson(persons,"Erica"))