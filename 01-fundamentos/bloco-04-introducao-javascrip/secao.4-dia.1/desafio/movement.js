// 6 - Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop -> diagonals

const peca = "rainha";

switch (peca) {
  case "torre":
    console.log(
      "torre qualquer número de casas vazias para frente, para trás, esquerda ou direita em uma linha reta"
    );
    break;
  case "bispo":
    console.log(
      "bispo qualquer número de quadrados vagos na diagonal em uma linha reta"
    );
    break;
  case "rainha":
    console.log(
      "rainha move qualquer número de casas vazias em qualquer direção: para frente, para trás, esquerda, direita ou diagonal, em linha reta."
    );
    break;
  case "rei":
    console.log(
      "rei move exatamente uma casa vazia em qualquer direção: para frente, para trás, esquerda, direita ou diagonal"
    );
    break;
  case "cavaleiro":
    console.log(
      "cavaleiro move-se em uma diagonal estendida de um canto de qualquer retângulo de quadrados 2×3 até o canto oposto mais distante"
    );
    break;
  case "peão":
    console.log(
      "peão avança exatamente uma casa, ou opcionalmente, duas casas quando na sua casa inicial, em direção ao lado do tabuleiro do oponente"
    );
    break;
  default:
    console.log("Invalido peca nome");
}
