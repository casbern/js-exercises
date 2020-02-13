const array = [1,2,3]

for(let i = array.length - 1; i > 0; i--) {
  const j = Math.round(Math.random() * i)
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

console.log(array)