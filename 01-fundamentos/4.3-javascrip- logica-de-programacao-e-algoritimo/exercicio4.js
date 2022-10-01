// Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let numeroPrimo = 0;

for (let index = 0; index <= 50; index += 1) {
  let isPrimo = true;
  for (let indexDividor = 2; indexDividor < index; indexDividor += 1) {
    if (index % indexDividor === 0) {
      isPrimo = false;
    }
  }
  if (isPrimo) {
    numeroPrimo = index;
  }
}

console.log(numeroPrimo);
