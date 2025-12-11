/*Escreva uma funçao que retorne um numero aleatorio
o numero maximo retornado deve ser passado via paramentro
utlizando math.random
*/

function aleatorio(num) {
  return Math.floor(Math.random() * num) + 1;
}

console.log(aleatorio(10));
console.log(aleatorio(100));
console.log(aleatorio(50));
