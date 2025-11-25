function multiplicarTresNumero(a, b, c) {
  return a * b * c;
}

console.log(multiplicarTresNumero(2, 3, 4));

const mult = multiplicarTresNumero(5, 7, 8);
console.log("o valor de mult é " + mult);

function podeDirigir(a) {
  if (a >= 18) {
    console.log("autorizado a dirigir");
  } else {
    console.log("nao autorizado a dirigir");
  }
}

console.log(podeDirigir(15));
