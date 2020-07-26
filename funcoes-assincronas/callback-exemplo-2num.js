function doubleNumber(num, num2, callback) {
  let x = Math.floor(Math.random() * 100 + 1 )
  let result
  
  setTimeout( function() {
    const result = (num * 2) + num2
    callback(result)
  },x)
  
  return result
}

let result
result = doubleNumber(5, 0, function(result) {
  console.log(result)

  doubleNumber(12, result, function(result) {
    console.log(result)
    
    doubleNumber(2, result, function(result) {
      console.log(result)
    })
  })
})

