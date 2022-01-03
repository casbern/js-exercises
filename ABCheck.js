function ABCheck(str) {
 
  return str.match(/a...b/g) != null;

}

const result = ABCheck("after badly")
console.log(result)