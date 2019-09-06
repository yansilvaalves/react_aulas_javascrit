// ==
// ===
// !=
// !==
// >
// <
// >=
// <=

/*if(2 == 4){
  document.write('verdadeiro - entrou no bloco if');
}else{
  document.write('falso - entrou no bloco else');
}*/

// &&
// ||
// !

//true && true
if(2 == 2 && 3 > 2){
  document.write('Verdadeiro');
}else{
  document.write('Falso');
}

if(2 == 2 || 3 > 2){
  document.write('Verdadeiro');
}else{
  document.write('Falso');
}

if(!(2 == 3)){
  document.write('Verdadeiro');
}else{
  document.write('Falso');
}

var nota = prompt('Digite a nota do aluno: ');
var faltas = prompt('Digite a quantidade de faltas: ');

var media = 7;
var faltas_maximas = 15;

if(nota >= media && faltas <= faltas_maximas){
  document.write('Aluno Aprovado');
}else{
  document.write('Aluno Reprovado');
}
