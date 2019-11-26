// ========== Max of two numbers ===========
// Ways to improve:
// 1. You can remove the 'else' from the the if..else and just return.
// 2. You can just write the tenary.

function maxNumber(number1, number2) {

//return (number1 > number2) ? number1 : number2;

if (number1 > number2)
return `the biggest number is ${number1}`;

return `the biggest number is ${number2}`;
}

let result = maxNumber(10, 20);
console.log(result);






