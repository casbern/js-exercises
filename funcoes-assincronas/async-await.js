function doubleNumber(num) {
  let x = Math.floor(Math.random() * 100 + 1 )

   setTimeout( function() {
    console.log(`Esse é o número multiplicado ${ num * 2 }`) 
  },x)
}

async function test(num) {
  const result = await doubleNumber(num)
}

let result = test(10)
result = test(20)
result = test(30)
result = test(40)


//* To get errors use a try and catch block.