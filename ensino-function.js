function grade(schoolYear) {
  const splitYear = schoolYear.split("")

  splitYear.find(function(letter) {
    if(letter == "F") {
      console.log(`${splitYear[0]} ano do ensino Fundamental`)
    } else if (letter == "M") {
      console.log(`${splitYear[0]} ano do ensino Médio`)
    } else {
      return false
    }
  })
}

 

grade("1EF")
grade("2EF")
grade("9EF")
grade("1EM")