//const RUN = () => {
//  const A = [1,2,3,4,5,6,7,8,9,10];
//  const REDUCER = (a,b) => {
//    return a + b;
//  };
//
//  console.log(A.reduce(REDUCER, 0));
//
//};
//
//RUN();

// ============= // ================== // ===============

//const RUN = () => {
//  const A = [1,2,3,4,5,6,7,8,9,10];
//  const reducer = (accumulator, b) => {
//    return accumulator + (3*b);
//  };
//
//  console.log(A.reduce(reducer, 0));
//
//};
//
//RUN();

// ============= // ================== // ===============

//const test = () => {
//  const arr = [10,20,30]; // 60
//
//  const reducer = (arr, b) => {
//    console.log(`this is the arr`)
//    console.log(arr);
//
//    console.log(`this is b`)
//    console.log(b);
//    
//    return arr + b;
//  };
//
//  console.log(arr.reduce(reducer,0));
//};
//
//test();

// ============= // ================== // ===============

var numbers = [15.5, 2.3, 1.1, 4.7];

function getSum(total, num) {

  console.log(`%c this is total`, `color: red; font-weight: bold`);
  console.log(total);

  console.log(`%c this is num`, `color: blue; font-weight:bold`);
  console.log(num);

  return total + Math.round(num);
}

console.log(numbers.reduce(getSum,0));