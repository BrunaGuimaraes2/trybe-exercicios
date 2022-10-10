//Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.

// Um ângulo será considerado inválido se não tiver um valor positivo

//Defina a função recebendo três ângulos como parâmetro.

//Dentro da função, crie a variável sumOfAngles que deve receber o valor de todos os parâmetros somados.

//Crie dentro da função a variável allAnglesArePositives que deve receber como valor uma condicional que checa se todos os ângulos são positivos

//Utilize o if/else para checar se o resultado de allAnglesArePositives é verdadeiro ou falso. Caso seja falso, retorne um aviso de que algum ângulo é inválido.

//Caso allAnglesArePositives seja verdadeira, teste se sumOfAngles é igual a 180. Retorne verdadeiro ou falso.

function triangleAnglesValidate(angleA, angleB, angleC) {
  let sumOfAngles = angleA + angleB + angleC;
  let allAnglesArePositives = angleA > 0 && angleB > 0 && angleC > 0;

  if (allAnglesArePositives) {
    if (sumOfAngles === 180) {
      return true;
    } else {
      return false;
    }
  } else {
    return " Erro: angulo inválido";
  }
}
