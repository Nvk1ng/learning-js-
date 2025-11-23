/*Verifique se o numero é primo;
um numero primo é um numero natural, maior que 1 e apenas divisivel por si proprio e por 1 
*/

let num = 45;
let divisoes = 0;

for (let i = 1; 1 <= num; i++) {
  if (num % i == 0) {
    divisoes++;
  }
}

if (divisoes == 2) {
  console.log("O numero é primo");
} else {
  console.log("o numero nao é primo");
}
