function doubleNumber(num) {
  let x = Math.floor(Math.random() * 100 + 1 )

  return new Promise( function(resolve, reject) {
    setTimeout( function() {
      resolve(`Esse é o número multiplicado ${ num * 2 }`)
    },x)
  })
}

doubleNumber(10)
  .then( function(resolve) {
    console.log(resolve)
  })
  
// Quando a promise retornar, faz isso... .then()  