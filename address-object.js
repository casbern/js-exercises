const address = {
  street: "Rua do Amor",
  city: "Cidade dos Sonhos",
  zipcode: "21.345-98"
}

function showAddress(address) {
  for (let key in address)
    console.log(key, address[key])

}

console.log(showAddress(address))

console.log(address.street)