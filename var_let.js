//Escopo de função "var"
//Escopo de bloco "let"

function exibirNome(){

  var nome = "Yan";

  if(true){

    let nome2 = "Alves";

    document.write(nome2);
  }

  document.write(nome);

}

exibirNome();
document.write(nome);
