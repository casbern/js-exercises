// function LongestWord(sen) {
//   let wordsArray = sen.split(' ')
//   let specialCaracters = /[`&!@#$%^*()_+\-=\[\]{};':"\\|,.<>\/?~]/

//   let array = []
  
//   for (let i = 0; i < wordsArray.length; i++) {
//     if(!specialCaracters.test(wordsArray[i])) {
//       array.push(wordsArray[i])
//     }
//   }

//   let longestString = array[0];

//   for(let i = 0; i < array.length; i++) {
//     if(array[i].length > longestString.length) {

//         longestString = array[i];
//       }
//     }
//   return longestString;
// }

// const result = LongestWord("hello world")
// console.log(result)

//ANOTHER RESOLUTION
// function longestString(sen) {
//   let arr = sen.match(/[a-z]+/gi)
//   console.log(arr)

//   let sorted = arr.sort(function (a,b) {
//     console.log(b.length - a.length)
//     return b.length - a.length
//   })

//   console.log(sorted)
  
//   return sorted[0]
// }



//ANOTHER RESOLUTION
function longestString(sen) { 
  return sen.match(/[a-z]+/gi).reduce((item, next) => item.length >= next.length ? item : next);  
}

const result = longestString("hello!!!kkkkk world amazing")
console.log(result)