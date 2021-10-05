function binarySearch(array, searchedNum) {
  let high = array.length -1
  let low = 0

  while( low <= high ) {
    let middle = (high + low) / 2
    
    let guess = array[ middle]

    if( guess == searchedNum ) {
      return middle
    }

    if( guess > searchedNum ) {

      high = middle - 1
      return high

    } else if( guess < searchedNum ) {

      low = middle + 1
      return low

    } 

    return null
    

  }
}



const result = binarySearch([1,3,5,7,9], 7)
console.log(result)