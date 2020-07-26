//* Quando a promise retornar, faz isso... .then()  

function doubleNumber(num) {
  let x = Math.floor(Math.random() * 100 + 1 )

  return new Promise( function(resolve, reject) {
    setTimeout( function() {
      resolve(`Esse é o número multiplicado ${ num * 2 }`)
    },x)
  })
}

doubleNumber(10)
  .then( function(result) {
    console.log('result', result)

    doubleNumber(20).then( function(result) {
      console.log('result1', result)

      doubleNumber(30).then( function(result) {
        console.log('result2', result)
      })
    })
  })
  
