function doubleNumber(num, num2, callback) {
  let x = Math.floor(Math.random() * 100 + 1 )

  setTimeout( function() {
    const result = (num * 2) + num2
    callback(result)
  },x)
}

doubleNumber(5, 0, function(result) {
  console.log(result)

  doubleNumber(12, result, function(result2) {
    console.log(result2)
    
    doubleNumber(2, result2, function(result3) {
      console.log(result3)
    })
  })
})

