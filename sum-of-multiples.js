// ========== Sum of multiples of 3 and 5 ===========

function sum(limit){
  let multiple_3 = 0;
  let multiple_5 = 0;

  for(let i = 1; i <= limit; i++) {
    if(i % 3 === 0) {
      multiple_3 += i;
    }
    else if( i % 5 === 0) {
      multiple_5 += i;
    }
  }  
 return multiple_3 + multiple_5;
}

//==== Version Mosh =====

// function sum(limit) {
//   let sum = 0;

//   for(let i = 0; i <= limit; i++) {
//     if(i % 3 == 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(sum(100));