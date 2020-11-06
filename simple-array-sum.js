function simpleArraySum(ar) {

  return ar.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  })
}

console.log(simpleArraySum([1,2,3,4,10,11]))
