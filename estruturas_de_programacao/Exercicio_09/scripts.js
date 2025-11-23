/*Escreva um loop for ou while que exiba qual numero é par e qual numero é impar
o contador deve ir ate 50
 */

for (i = 0; i <= 50; i++) {
  if (i % 2 == 0) {
    console.log(`${i} é par`);
  } else {
    console.log(`${i} é impar`);
  }
}

let numero = 0;
while (numero <= 50) {
  if (numero % 2 == 0) {
    console.log(`${numero} é par`);
  } else {
    console.log(`${numero} é impar`);
  }
  numero += 1;
}
