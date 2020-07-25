//Callback
function doubleNumber(num, callback) {
  let x = Math.floor(Math.random() * 100 + 1 )
  setTimeout( function() {
    callback(num) 
  },x)
}

doubleNumber(10.20, function(num) {
  console.log('I am the first')
  console.log(`Esse é o número multiplicado ${ num * 2 }`)

  doubleNumber(10, function(num) {
    console.log('I am the second')
    console.log(`Esse é o número multiplicado ${ num * 2 }`)
    
    doubleNumber(5, function(num) {
      console.log('I am the third')
      console.log(`Esse é o número multiplicado ${ num * 2 }`)

      doubleNumber(5.40, function(num) {
        console.log('I am the fourth')
        console.log(`Esse é o número multiplicado ${ num * 2 }`)

        doubleNumber(6.20, function(num) {
          console.log('I am the fifth')
          console.log(`Esse é o número multiplicado ${ num * 2 }`)

        }) 
      }) 
    }) 
  }) 
})

//* Anonymous function 
/* Para aliviar o callbackhell, nós podemos dar um nome as funções anonimas
e passa-las como segundo argumento.
 */