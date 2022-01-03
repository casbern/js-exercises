function numberAddition(str) {

  return str.match(/(\d+)/g).reduce( (acc, cur) => {
   return acc + cur
 }) 
}

const result = numberAddition("75Number9")
console.log(result)