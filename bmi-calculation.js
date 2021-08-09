// function BMICalculation(weight, height) {
//   let BMI = (weight / height ** 2).toFixed(2)
  
//   return BMI
// }

// const markBMI = BMICalculation(78, 1.69)
// const johnBMI = BMICalculation(92, 1.95)

// const mark = BMICalculation(95, 1.88)
// const john = BMICalculation(85, 1.76)


const mark = {
  name: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI() {
    let BMI = (this.mass / this.height ** 2).toFixed(2)
    return BMI
  }
}

const john = {
  name: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI() {
    let BMI = (this.mass / this.height ** 2).toFixed(2)
    return BMI
  }
}


if(mark.calcBMI() > john.calcBMI()) {
  console.log(`Mark's BMI (${mark.calcBMI()}) is higher than John's (${john.calcBMI()})!`)
} else {
  console.log(`John's BMI (${john.calcBMI()}) is higher than Mark's (${mark.calcBMI()})!`)
}

