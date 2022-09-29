// 3 - Utilize if/else para fazer um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

const a = 230;
const b = 120;
const c = 49;

if (a > b && a > c) {
  console.log("O maior numero e: " + a + " (a)");
} else if (b > a && b > c) {
  console.log("O maior numero e: " + b + " (b)");
} else {
  console.log("O maio numero e: " + c + " (c)");
}
