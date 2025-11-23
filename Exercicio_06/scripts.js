/*faça uma estrutura if/else para verificar se um usuario pode dirigir;
armazene me variaveis algumas informacoes sobre o usuario: idade, se tem cnh;
se a idade for maior que 18 e nao possuir cnh, exiba uma mensagem;
se a idade for maior que 18 e tem cnh exbiba, uma mensagem;
se nao tiver 18 nem cnh, exiba outra mensagem;
 */

let idade = 20;
let cnh = true;

if (idade >= 18 && !cnh) {
  console.log("Você tem idade para dirigir, mas precisa tirar a CNH.");
} else if (idade >= 18 && cnh) {
  console.log("Autorizado a dirigir!");
} else {
  console.log("Não autorizado a dirigir - idade insuficiente.");
}
