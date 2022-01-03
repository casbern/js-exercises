function letterCapitalize(str) {
 let splitted = str.split(" ")

 for(let i = 0; i < splitted.length; i++) {
   splitted[i] = splitted[i].charAt(0).toUpperCase() + splitted[i].slice(1)

  }
  
  return splitted.join(" ")

}

const result = letterCapitalize("i ran there")
console.log(result)