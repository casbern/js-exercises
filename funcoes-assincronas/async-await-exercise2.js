function doubleNumber(num, num2) {
  let x = Math.floor(Math.random() * 100 + 1 )

  return new Promise( function(resolve, reject) {
    setTimeout( function() {
      const result = num * 2 + num2
      resolve(result) 
   }, x)
  })
}

async function main() {
  let result = await doubleNumber(5,0)
  console.log(result)
  result = await doubleNumber(12,result)
  console.log(result)
  result = await doubleNumber(2,result)
  console.log(result)
  
}


main()