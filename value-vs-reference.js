// ===== VALUE ======

let number = 10

function increase(number) {
  number++
  console.log(number) //inside the scope it will be 11
}

increase(number)
console.log(number) //outside the scope, it comes back to 10

// ===== REFERENCE =====

let obj = {value: 10}

function increase(obj) {
  obj.value++ //inside the scope or outside the scope the value will be the same.
}

increase(obj)
console.log(obj) //because the value is taken by the reference number of the obj.