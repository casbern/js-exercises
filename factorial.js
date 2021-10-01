function FirstFactorial(num) { 

  let fact = 1

  for(let i = num; i >= 1; i--) {
    fact = fact * i
  }

 return fact

}
   
const result = FirstFactorial(4)

console.log(result)