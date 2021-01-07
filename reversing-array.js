function reversingArray(arr) {
  //return arr.reverse().toString().split(",").join(" ")
  return arr.reverse().join(" ")
}

const result = reversingArray([1,2,3,4])
console.log(result)