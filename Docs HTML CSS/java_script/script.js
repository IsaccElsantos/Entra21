var nome = "Isaac" 
let valor = 2.3
let idade = 16
var casado = false
let pessoa = {nome: "lucia", idade:12};
let cores = [ "amarelo", "vermelho","verde "]

document.writeln(nome + "<br>")//adiciona quebra de linha apos cada valor//
document.writeln(idade + "<br>")
document.writeln(casado + "<br>")
document.writeln(JSON.stringify(pessoa) + "<br>")//para exibir objeto de forma legivel//
document.writeln(cores + "<br>")

document.writeln("<br><hr><br>")
//operacoes aritmeticas//
document.writeln("<hr>"+ "<br>"+"Operadores Aritmeticos" +"<br>")
document.writeln(3+2 +"<br>")
document.writeln(8*2 +"<br>")
document.writeln(10/4 +"<br>")
document.writeln(9-5 +"<br>")
document.writeln("<br>"+ "9"+"5"+"<br>")

document.writeln("<br><hr><br>")

var count = 0;
document.writeln(count+ "<br>")

count++; //incrementa variavel
document.writeln(count+ "<br>")

count--; //decrementa variavel
document.writeln(count+ "<br>")

count +=2; //soma 2: o mesmo que count + 2
document.writeln(count+ "<br>")

count *=3; //multiplica o valor por 3: o mesmo que count * 3;
document.writeln(count+ "<br>")

count // => 6: nomes de variaveis tambem sao expressoes.
document.writeln(count+ "<br>")

var x = 2, y = 3; // Esses sinais = são atribuições e não testes de igualdade.

x==y// => falso: igualdade

x !=y// => verdadeiro: desigualdade

x<y// => verdadeiro: menor que
x<=y// => verdadeiro: menor ou igual a
x>y// => falso: maior que
x>=y// => falso: maior ou igual a

"two"=="three"// => falso: as duas strings são diferentes
"two">"three"// => verdadeiro: "tw" é alfabeticamente maior do que "th"
false==(x>y)// => verdadeiro: falso é igual a falso

document.writeln("<br><hr><br>")

(x==2)&&(y==3) // => verdadeiro: as duas comparações são verdadeiras. && é E


(x>3)||(y<3) // => falso: nenhuma das comparações é verdadeira. || é OU


!(x==y)// => verdadeiro: ! inverte um valor booleano

