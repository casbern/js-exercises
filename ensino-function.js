function grade(schoolYear) {
  const splitYear = schoolYear.split("")

  splitYear.find(function(letter) {
    if(letter == "F") {
      console.log(`${splitYear[0]}º Ano do Ensino Fundamental`)
    } else if (letter == "M") {
      console.log(`${splitYear[0]}º Ano do Ensino Médio`)
    } else {
      return false
    }
  })
}

 

grade("1EF")
grade("2EF")
grade("9EF")
grade("1EM")
grade("2EM")