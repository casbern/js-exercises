function doubleNumber(num) {
  let x = Math.floor(Math.random() * 100 + 1 )

  return new Promise( function(resolve, reject) {
    setTimeout( function() {
      const result = num * 2
      resolve(result) 
   }, x)
  })
}

async function main() {
  let result = await doubleNumber(10)
  console.log(result)
  result = await doubleNumber(20)
  console.log(result)
  result = await doubleNumber(30)
  console.log(result)
  result = await doubleNumber(40)
  console.log(result)
}


main()

//* To get errors use a try and catch block.
//* Await always await for a promise and it is only valid in a async function.