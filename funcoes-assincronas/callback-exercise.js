//Callback
function doubleNumber(num, callback) {
  let x = Math.floor(Math.random() * 100 + 1 )
  setTimeout( function() {
    const doubled = num * 2
    callback(doubled) 
  },x)
}

doubleNumber(10.20, function(num) {
  console.log('I am the first')
  console.log(num)

  doubleNumber(10, function(num) {
    console.log('I am the second')
    console.log(num)
    
    doubleNumber(5, function(num) {
      console.log('I am the third')
      console.log(num)

      doubleNumber(5.40, function(num) {
        console.log('I am the fourth')
        console.log(num)

        doubleNumber(6.20, function(num) {
          console.log('I am the fifth')
          console.log(num)

        }) 
      }) 
    }) 
  }) 
})

//* Anonymous function 
/* Para aliviar o callbackhell, nós podemos dar um nome as funções anonimas
e passa-las como segundo argumento.
 */