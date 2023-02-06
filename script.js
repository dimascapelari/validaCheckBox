let btn = document.getElementsByClassName("btn");
let opcoes = document.getElementsByClassName("opcoes");
let check = document.getElementsByName("prefere-contato");

function validar() {
  // console.log(check);
  // if (opcoes[0].checked || opcoes[1].checked || opcoes[2].checked === true) {
  //   console.log("deu certo");
  // } else {
  //   console.log("Escolha 1 opção!");
  // }

  let ck = Array.from(check);
  let dados = [];

  for (var list of ck) {
    if (list.checked === true) {
      dados.push(list.checked);
    }
  }

  // console.log(dados);

  if (dados.length === 0) {
    alert("Escolha 1");
  } else {
    alert("Deu certo");
  }
}
