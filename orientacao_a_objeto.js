
class Casa{

  constructor(corAtributo, quantidadeQuartosAtributo){
    this.cor = corAtributo;
    this.quantidadeQuartosAtributo
  }

  getInformacoes(){
    document.write("Cor: "+this.cor+" Quantidade de quartos: "+
  this.quantidadeQuartosAtributo);
  }

  static abrirPortao(portao){
    document.write("Abrir portão: "+portao);
  }

}

/*var casa = new Casa("Vermelha", 5);
casa.abrirPortao("Frente");*/

//Exemplo herança

class Animal{

  constructor(cor, preso){
    this.cor = cor;
    this.peso = peso;
  }

  dormir(){
    document.write('Dormir');
  }

}

class Cao extends Animal{

  latir(){
    document.write("Latir");
  }

  dormir(){
    super.dormir();
    document.write("como um cão.")
  }

}

class Passaro extends Animal{

  voar(){
    document.write("Voar");
  }

}

var objetoLiteral = {
  cor: "Marrom",
  peso: 30,
  raca: "Labrador",
  filhotes: {filhote1: "Rex", filhote2: "Doug"}
};

var formatacaoTexto ={
  cor: "Amarelo",
  tamanho: 30
}

var imagem = {
  posicao: "centro",
  tamanho: {
    largura: 200,
    altura: 300
  }
}

var objetoJson = '{
  "cor": "Marrom",
  "peso": 30,
  "raca":"Labrador"
}';

document.write(objetoJson);
