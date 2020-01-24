function arrayFromRange(min, max) {
  let output = []

  for (let i = 0; i < max; i++) {

    output.push(i + 1)

    console.log(`after`)
    console.log(output)
    console.log(`---END CICLE---`)

  }
  return output

}

const numbers = arrayFromRange(1, 4)
console.log(numbers)