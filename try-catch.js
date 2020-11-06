function reverseString(s) {
  try {
      const newString = s.split('').reverse().join('')
      console.log(newString)
      
  } catch (err) {
      console.log(err.message)
      console.log(s)
  }
}

console.log(reverseString("1234"))
console.log(reverseString(1234))