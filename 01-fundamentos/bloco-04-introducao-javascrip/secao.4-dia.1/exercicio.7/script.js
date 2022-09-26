let status = "lista";

switch (status) {
  case "aprovada":
    console.log("Parabens, voce foi aprovada(o)!");
    break;

  case "lista":
    console.log("Voce esta na nossa lista de espera");
    break;

  case "reprovada":
    console.log("Voce foi reprovado(o)");

  default:
    console.log("Informaçao incorreta");
}
