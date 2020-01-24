function arrayFromRange(min, max) {
  let output = []

  for(let i = 0; i <= max; i++) {
    console.log(`before ${output}`)
      output.push(i + 1)
      console.log(`after ${output}`)
    
    return output
  }
}

const numbers = arrayFromRange(1,4)
console.log(numbers)