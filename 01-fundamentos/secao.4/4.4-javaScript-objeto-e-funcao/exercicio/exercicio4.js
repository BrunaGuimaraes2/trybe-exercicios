//  1- Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

// Exemplo de palíndromo: arara

// verificaPalindrome('arara')

// Retorno esperado: true
// verificaPalindrome('desenvolvimento')

// Retorno esperado: false

// function verificaPalindrome(word) {
//   for (index in word) {
//     if (word[index] != word[word.length - 1 - 1]) {
//       return false;
//     }
//   }
// }

// Outra forma de resolver o exercício é utilizando os métodos split, reverse e join. Primeiro o método split transformará a string em um array onde cada posição será uma letra da string. Depois o método reverse fará o array ficar de trás pra frente. Em seguida o método join faz com que todo o array vire uma string novamente

function verificaPalindrome(string) {
  let reverse = string.split("").reverse().join("");

  return reverse;
}

console.log(verificaPalindrome("arara")); //true
console.log(verificaPalindrome("desenvolvimento")); //false
