function BMICalculation(weight, height) {
  let BMI = (weight / height ** 2).toFixed(2)

  const result = `You have a BMI of ${BMI} and you are ${whatIsMyBMI(BMI)}`

  return result
}

function whatIsMyBMI(BMI) {
  if(BMI < 18.5) {
    return "underweight"
  } else if(BMI >= 18.5 && BMI <= 25) {
    return "normal"
  } else if(BMI > 25 && BMI <= 30) {
    return "average"
  } else if(BMI > 30 && BMI <= 40) {
    return "obesity"
  } else {
    return "severe obesity"
  }
}

const mark = BMICalculation(78, 1.69)
const john = BMICalculation(92, 1.95)

// const mark = BMICalculation(95, 1.88)
// const john = BMICalculation(85, 1.76)

console.log(mark)
console.log(john)