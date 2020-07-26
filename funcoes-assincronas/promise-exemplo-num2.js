function doubleNumber(num, num2) {
  let x = Math.floor(Math.random() * 100 + 1 )

  return new Promise( function(resolve, reject) {
    setTimeout( function() {
      resolve( num * 2 + num2 )
    },x)
  })
}

doubleNumber(5,0)
  .then( function(result) {
    console.log('result', result)

    doubleNumber(12,result).then( function(result) {
      console.log('result1', result)

      doubleNumber(2,result).then( function(result) {
        console.log('result2', result)
      })
    })
  })
  