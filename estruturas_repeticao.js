var x = 1;

document.write('Início do loop <br>');

while( x <= 10 ){

	if(x == 3){
		break;
	}

	document.write('Iteração: '+x+'<br>');

	x++;

}

document.write('Fim do loop <br>');

var x = 10;

do{

	document.write('Executou o comando');

	x++;

}while(x <= 10);

for(var x = 1; x <= 10; x++){
	document.write(x + '<br>');
}