// console.log("Olá Mundo");

let btn = document.getElementsByClassName("btn");
let opcoes = document.getElementsByClassName("opcoes");
let check = document.getElementsByName("prefere-contato");

function validar() {
  //   console.log(check);

  if (opcoes[0].checked || opcoes[1].checked || opcoes[2].checked === true) {
    console.log("deu certo");
  } else {
    console.log("Escolha 1 opção!");
  }
}
