function factorial(number) {
  if (number <= 1) {
    return 1
  } else {
    let result = number * factorial(number - 1)
    return result
  }
}

const results = factorial(5)
console.log(results)