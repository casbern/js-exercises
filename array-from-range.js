function arrayFromRange(min, max) {
  let output = []

  for(n of max) {
    if(n <= max) {
      output.push(n + 1)
    }
    return output
  }
}

const numbers = arrayFromRange(1,4)
console.log(numbers)