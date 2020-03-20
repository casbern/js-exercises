function grade(schoolYear) {
  const [year, notNeeded, letter] = schoolYear.split("")

    if(letter == "F") {
      return `${year}º Ano do Ensino Fundamental`
    } else if (letter == "M") {
      return `${year}º Ano do Ensino Médio`
    } else {
      return false
    }

}


const teste = grade("9EF")
console.log(teste)

console.log(grade("2EF"))