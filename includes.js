const numbers = [1,2,3,4]
numbers.includes(1)

function includes(array, searchElement) {
  
    return array.indexOf(searchElement) !== -1
  
}

const isIncluded = includes(numbers, 5)
console.log(isIncluded)