//const address = createAddress("Rua do Amor","Cidade dos Sonhos","12.344-000")
  

// Factory Function
// function createAddress(street, city, zipcode) {
//   return {
//     street,
//     city,
//     zipcode
//   }
// }


// Construction Function
function Address(street, city, zipcode){
  this.rua = street
  this.city = city
  this.zipcode = zipcode

  
}

const address1 = new Address("Rua do Amor","Cidade dos Sonhos","12.344-000")

console.log(address1)