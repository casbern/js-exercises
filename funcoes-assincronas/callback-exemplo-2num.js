function doubleNumber(num, num2, callback) {
  let x = Math.floor(Math.random() * 100 + 1 )
  let result
  
  setTimeout( function() {
    callback(num, num2)
  },x)
  
  return result
}

let result
result = doubleNumber(5, 0, function(num, num2) {
  let r = (num * 2) + num2
  console.log(r)

  doubleNumber(12, r, function(num, num2) {
    let r = (num * 2) + num2
    console.log(r)
    
    doubleNumber(2, r, function(num, num2) {
      let r = (num * 2) + num2
      console.log(r)
    })
  })
})

