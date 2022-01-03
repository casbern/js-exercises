const fibonacci = function(num, memo) {
  // Recebe os números anteriores
  // ou um novo objeto, se for a primeira vez
  memo = memo || {};

  // Verifica se já existe o
  // valor calculado anteriormente
  if (memo[num]) return memo[num];
  if (num <= 1) return 1;

  // Caso realmente não tenha,
  // executa normalmente o código
  return (memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo));
};

const result = fibonacci(6)
console.log(result)

