


try {
  const numbers = null
  const count = countOccurrences(numbers, 1)
  console.log(count)
} 
catch (e) {
  console.log(e.message) //display of the error message of the object. All functions are objects that is why we use .message???
}


function countOccurrences(array, searchElement) {

  if (!Array.isArray(array)) {
    throw new Error("Invalid Array")
  }

  return array.reduce((accumulator, current) => {

    //console.log(`this is the accumulator ${accumulator}`)
    //console.log(`this is the current ${current}`)

    const occurrence = (current === searchElement) ? 1 : 0

    //console.log(`this is the occurrence ${occurrence}`)

    return accumulator + occurrence
  },0)
}