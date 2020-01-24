function arrayFromRange(min, max) {
  let output = []

  for (let i = min; i <= max; i++) {

    output.push(i)

    console.log(`after`)
    console.log(output)
    console.log(`---END CICLE---`)

  }
  return output

}

//const numbers = arrayFromRange(-10, -4)

const numbers = arrayFromRange(1, 4)
console.log(numbers)