// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

const a = 23;
const b = 50;

function soma(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function mod(a, b) {
  return a % b;
}

//Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados

//PASSO A PASSO

//Defina a função recebendo dois valores como parâmetro

const primeiroNum = 23;
const segundoNum = 44;

function maiorNum(primeiroNum, segundoNum) {
  if (primeiroNum > segundoNum) {
    return primeiroNum + " é maior que " + segundoNum;
  } else {
    return segundoNum + " é maior que " + primeiroNum;
  }
}

// Utilize if/else para criar uma condicional que teste se o primeiro número é maior ou menor que o segundo. O retorno da função deve conter o resultado da condicional
