/*
 * Complete a função 'tripleTheChances' abaixo.
 *
 * O retorno da função é uma variável do tipo INTEGER_ARRAY.
 * A função aceita o parâmetro chances do tipo INTEGER_ARRAY.
 */

//function tripleTheChances(chances) {
//   let newArray = [];

//   for(let num of chances) {
//     let multiplication = num * 3;

//     newArray.push(multiplication);
//   }

//   return newArray;
// }

//ANOTHER SOLUTION

function tripleTheChances(chances) {
  let newArray = [];

  chances.map( num => {
    let mult = num * 3;
    newArray.push(mult);
  })

  return newArray;
}

const result = tripleTheChances([1,2,3,4]);
console.log(result);