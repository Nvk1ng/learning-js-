/*Armazene a velocidade d eum carro em uma variavel, com o numero que desejar;
faça uma estrutura if/else que verifica se ele esta acima da velocidade;
80 é a velocidade maxima permitida;
se estiver acima ou abaixo exiba mensagens com console.log
 */

let velocidade = 120;
const limite = 80;

if (velocidade > limite) {
  console.log("Voce esta acima do limite de velocidade");
} else {
  console.log("Voce esta dentro do limite de velocidade");
}
