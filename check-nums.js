function checkNums(num1,num2) {
  // if(num1 > num2) {
  //   return "true"
  // } else if( num1 < num2 ) {
  //   return "false"
  // } else {
  //   return -1
  // }

  return num1 == num2 ? -1 : num2 > num1 ? true : false;
}

const result = checkNums(101,2110)
console.log(result)