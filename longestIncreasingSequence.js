function longestIncreasingSequence(arr) {
   let newArr = [arr[0]]
   
  for(let i = 0; i < arr.length; i++) {

    if(newArr[newArr.length-1] < arr[i]) {
      newArr.push(arr[i])
    }

  }

  return newArr.length
}


const result = longestIncreasingSequence([10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90])
console.log(result)