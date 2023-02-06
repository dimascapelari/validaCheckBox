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

  // let ck = Array.from(check);
  let dados = [];

  for (var item of check) {
    if (item.checked === true) {
      dados.push(item.value);
    }
  }

  // console.log(dados);

  if (dados.length === 0) {
    alert("Escolha pelo menos uma opção");
  } else {
    alert(`Escolha feita com sucesso: \n ${dados} `);
    // console.log(`${dados}`);
  }
}
