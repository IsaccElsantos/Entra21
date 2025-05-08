function numeros(){ 
let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numeros.length; i++) {
    console.log(i);
}
}

function npares(){ 
//<=20 pois vai ate 20 ou seja menor que 20/ +2 pois é de 2 em 2
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
  }
}

function tabuada(){ 
// let "i = 1" pois começa no numero 1 e nao 0/ i <=10 pois a tabuada deve ser até 10
let num = parseInt(prompt("Digite o numero da tabuada"))
for (let i = 1; i <= 10; i++) {
    //numero * "i" que é o numero que voce escolheu
    let resultado= num * i;
    //${num} é o numero escolhido/ x ${i} é vezes o numero da tabuada/ ${resultado} é o resultado da conta
    console.log(`${num} x ${i} = ${resultado}`);
}
}

function numero(){

    let numero = 0;
    let maior = 0;
    //"!" significa didferernte
    while(numero != -1) {
        numero = parseInt(prompt("informe um numero\n Se desejar sair digite -1:"))
        if (maior < numero) {maior = numero}
    }
document.writeln(" o maior numero foi: "+maior)
}

function numerospares(){
    let soma = 0;
    for (let i = 1; i <= 100; i++) {           
        if (i % 2 ===0)
        soma += i;
        console.log("A soma de todos os números pares de 1 a 100 é:", soma);
      }

}

function numerosinteiros(){

let numero;

while (true) {
  numero = parseInt(prompt("Digite um número inteiro digite -1 para parar:"));
//se for um numero(=== é um codigo de comparador) = a -1 ele para pelo codigo break
  if (numero === -1) {
    break;
  }
//funçao para selecionar somente numeros pares
  if (numero % 2 === 0) {
    console.log("Número par:", numero);
  }
}
//codigo para informar o encerramaento
console.log("Programa encerrado.");
}

function media(){

    let soma = 0;
    let quantidade = 0;
    //for(;;) cria um loop infinito ate encontrar um break
    for (;;) {
      let input = prompt("Digite um número inteiro (-1 para parar):");
      let numero = parseInt(input);
    //se for um numero(=== é um codigo de comparador) = a -1 ele para pelo codigo break
      if (numero === -1) {
        break;
      }
    
      if (!isNaN(numero)) {
        soma += numero;
        quantidade++;
      } else {
        console.log("Por favor, digite um número válido.");
      }
    }
    
    if (quantidade > 0) {
      let media = soma / quantidade;
      console.log("A média dos números digitados é:", media);
    } else {
      console.log("Nenhum número válido foi digitado.");
    }
}    
  
function impares(){
//for(;;) cria um loop infinito ate encontrar um break
    for (;;) {

    let input = prompt("Digite um número inteiro (0 para parar):");
    //para transferir o valor de input para a variavel "numeros" em parseInt
    let numero = parseInt(input);
  
    if (numero === 0) {
      break;
    }
  // !isNaN verififca se é realmente um numero valido
    if (!isNaN(numero)) {
        //numero % 2 !== 0 significa "o resto da divisão por 2 não é zero", ou seja, é ímpar
      if (numero % 2 !== 0) {
        //ele imprime esse numero
        console.log("Número ímpar:", numero);
      }
      //se nao for um numero valido ele encerra e aparece esse log
    } else {
      console.log("Por favor, digite um número válido.");
    }
  }
  }
