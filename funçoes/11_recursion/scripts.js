function recursao(n) {
  if (n < 2) {
    console.log("Recursao parou");
  } else if (n % 2 != 0) {
    console.log("numero impar");
    recursao(n - 1);
  } else {
    console.log("numero par");
    recursao(n - 2);
  }
}

recursao(39);
recursao(22);
recursao(55);
