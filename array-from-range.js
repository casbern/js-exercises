function arrayFromRange(min, max) {
  let output = []

  for(let i = 0; i <= max; i++) {
    
      output.push(i + 1)
    
    return output
  }
}

const numbers = arrayFromRange(1,4)
console.log(numbers)