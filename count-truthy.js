// ========== Count Truthy ===========

function countTruthy(array) {
  let truthyNumber = 0;
  isTrue = true;
  for(element of array) {
    if(element) truthyNumber++;
  }
  return truthyNumber;
}

const array = ['Cassia', 'Stefaninhu', 1, 2, 3, 0, NaN, ''];
const result = countTruthy(array);
console.log(result);