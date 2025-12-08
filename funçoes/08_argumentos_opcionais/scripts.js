function soma(a, b) {
  if (a == undefined || b == undefined) {
    console.log("Esta funcao precisa ter 2 argumentos");
  } else {
    return a + b;
  }
}

console.log(soma(1));
console.log(soma(3, 3));
