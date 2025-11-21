/*A funcao Math.pow() exibe a potencia de um numero;
teste a funcao com console.log() e as seguintes bases 2,3, 18 e 0 expoente deve ser 2;
recebe 2 argumentos, base e expoente;

ex Math.pow(5,3)
 */

let numero1 = Math.pow(2, 2);
let numero2 = Math.pow(3, 2);
let numero3 = Math.pow(18, 2);
let numero4 = Math.pow(0, 2);

console.log(numero1);
console.log(numero2);
console.log(numero3);
console.log(numero4);

let base = prompt("Digite o numero da base");
let expoente = prompt("Digite o numero expoente");

let calc = Math.pow(base, expoente);
console.log(calc);
