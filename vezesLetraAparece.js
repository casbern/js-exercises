/*
 * Complete a função 'vezesLetraAparece' abaixo.
 *
 * É esperado que a função retorne um número inteiro.
 * A função aceita os seguintes parâmetros:
 *  1. frase (string)
 *  2. letra (string)
 */

function vezesLetraAparece(frase, letra) {

  let counter = 0;

  for(let letter of frase) {
    if(letter == letra) {
      counter += 1;
    }
  }

  return counter;
}


const result = vezesLetraAparece("Hoje é um dia bonito", "o");
console.log(result);