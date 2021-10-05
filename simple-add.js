// function simpleAdding(num) {
//  let result = 0

//  for(let i = 0; i <= num; i++) {
//   result += i
//  }

//  return result
// }

//ANOTHER SOLUTION
function simpleAdding(num) {
  if(num ==0) {
    return num
  }

  let adding = simpleAdding(num-1) //This function is called until the condition is satisfactory. 

  let result = num + adding

  return result
}

const result = simpleAdding(4)
console.log(result)