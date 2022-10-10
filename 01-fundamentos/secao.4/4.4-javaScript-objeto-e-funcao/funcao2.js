//Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados

const primeiroNum = 23;
const segundoNum = 22;
const terceiroNum = 12;

function maiorDeTres(primeiroNum, segundoNum, terceiroNum) {
  if (primeiroNum > segundoNum && primeiroNum > terceiroNum) {
    return "O maior número é: " + primeiroNum;
  } else if (segundoNum > primeiroNum && segundoNum > terceiroNum) {
    return "O maior número é: " + segundoNum;
  } else {
    return "O maior número é: " + terceiroNum;
  }
}

// Crie uma condicional utilizando if/else. Verifique se o primeiro número é maior do que os outros dois, retornando o valor esperado caso o resultado seja positivo

//Verifique se o segundo número é maior do que os outros dois. E, caso nem o primeiro nem o segundo sejam maiores, então o terceiro é o maior
