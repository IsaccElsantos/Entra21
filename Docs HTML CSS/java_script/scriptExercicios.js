function terreno() {
    var largura = prompt("1)Qual a largura do terreno?")
    var comprimento = prompt("Qual o comprimento?")

    var dimensao = largura * comprimento
    alert(" O tamanho do terreno é" + dimensao + " mt²")
}

function cavalos() {

    var cavalos = prompt("2)Quantos cavalos são?")

    var haras = cavalos * 4
    alert(" A quantidade de ferraduras para equipar todos os cavaolos é " + haras)
}

function padeiro() {

    var vbroas = prompt("Quantas broas foram vendidas?")
    var vpaes = prompt("Quantos pães foram vendidos?")

    var broas = -1.50, paes = -0.12;
    var preço = broas * vbroas + paes * vpaes
    var total = preço / 10
    var realV = total - preço


    alert("O total arrecadado foi R$" + realV)
}

function idade() {
    var nome = prompt("Qual seu nome?")
    var anos = prompt("Quantos anos voce tem?")
    var idade = anos * 365

    alert(nome + ", voce viveu " + idade + " dias")

}

function gasolina() {

    var reais = prompt("Quantos reais voce ira abastecer?(use ponto ao inves de virgula no valor decimal)")

    var preçoG = prompt("Quanto esta o preço do litro da gasolina")

    var litros = reais / preçoG
    alert("Voce ira abastecer" + litros + " litros")
}

function restaurante() {

    var quilo = prompt("Quantos quilos de comida tem no seu prato?(o valor do prato sera descontado)")
    var preçoKG = 12.00
    var valorTT = quilo * preçoKG
    alert("Preço do kilo:R$12,00 Quilos do prato:" + quilo + "Kg Preço total:R$" + valorTT)
}

function decorrer() {

    var dia = prompt("Informe o dia que voce deseja?") // Dia desejado
    var mes = prompt("Informe o mes que voce deseja") // Mês desejado (Janeiro = 1, Fevereiro = 2, ..., Dezembro = 12)

    var anoAtual = new Date().getFullYear(); // Pega o ano atual

    var dataDesejada = new Date(anoAtual, mes - 1, dia); // Criando a data desejada
    var inicioDoAno = new Date(anoAtual, 0, 1); // Criando 1º de janeiro do ano atual

    var diferencaMs = dataDesejada - inicioDoAno; // Diferença em milissegundos
    var diferencaDias = diferencaMs / (1000 * 60 * 60 * 24); // Convertendo para dias

    alert("Dias desde o início do ano: " + diferencaDias);

}

function medias() {
    var nota1 = parseFloat(prompt("Informe a primeira nota"))
    var nota2 = parseFloat(prompt("informe a segunda nota"))
    var nota3 = parseFloat(prompt("Informe a terceira nota"))
    var media = (nota1 + nota2 + nota3) / 3;
    alert("A media das tres notas é " + media.toFixed([2]))

}

function camisetas() {
    var precoPequena = 10;
    var precoMedia = 12;
    var precoGrande = 15;

    var qtdPequena = parseInt(prompt("Qunatas camisetas pequenas vendidas:"));
    var qtdMedia = parseInt(prompt("Quantas camisetas médias vendidas:"));
    var qtdGrande = parseInt(prompt("Quantas camisetas grandes vendidas:"));

    var total = (qtdPequena * precoPequena) + (qtdMedia * precoMedia) + (qtdGrande * precoGrande);

    alert("O valor total arrecadado é: R$ " + total);
}

function cartesiano() {
    var x = parseFloat(prompt("valor de x:"));
    var y = parseFloat(prompt("valor de y:"));


    var distancia = Math.sqrt(Math.pow((x), 2) + Math.pow((y), 2));

    alert("A distância entre os pontos é: " + distancia.toFixed(2));
}

function fabricaM() {
    var qntdias = prompt("Quantos dias se passaram?")
    var meses = 30
    var anos = 365
    var divmeses = qntdias / meses
    var divanos = qntdias / anos
    alert("Se passaram " + (Math.round(divmeses)) + " meses sem acidenstes e " + (Math.round(divanos)) + " anos sem acidentes")
}

function salarioT() {
    var salarioInicial = parseFloat(prompt("Digite o salário do funcionário:"));

    var salarioAumento = salarioInicial * 1.15; // Aumento de 15%
    var salarioFinal = salarioAumento * 0.92;  // Desconto de 8%

    alert("Salário inicial: R$ " + salarioInicial.toFixed(2) + "\n" +
        "Salário com aumento de 15%: R$ " + salarioAumento.toFixed(2) + "\n" +
        "Salário final após desconto de 8%: R$ " + salarioFinal.toFixed(2));
}

function lernum() {

    var selecvalor = prompt("Informe um valor de até tres digitos")
    var centena = Math.floor(selecvalor / 100);
    var dezena = Math.floor((selecvalor % 100) / 10);
    var unidade = selecvalor % 10

    alert("CENTENA = " + centena + "\n" +
        "DEZENA = " + dezena + "\n" +
        "UNIDADE = " + unidade);
}

function pizza() {

    var raio = parseFloat(prompt("Digite o tamanho da pizza em cm:"));
    var divR = raio / 2;
    var area = Math.PI * Math.pow(divR, 2);

    alert("A área da pizza é: " + area.toFixed(2) + " cm²");

}

function CAF() {

    var contaTotal = parseFloat(prompt("Digite o valor total da conta:"));
    var valorBase = Math.floor(contaTotal / 3); //math.floor arredonda para numero inteiro, conta somente para andre e felipe//
    var valorFelipe = contaTotal - (valorBase * 2);

    alert("Carlos deve pagar: R$ " + valorBase.toFixed(2) + "\n" +
        "André deve pagar: R$ " + valorBase.toFixed(2) + "\n" +
        "Felipe deve pagar: R$ " + valorFelipe.toFixed(2));


}

function sanduba() {
    //pegar o peso dos ingredienets e multiplicar por quantidade de sanduiches e depois dividir por mil que é a quantidade de peso em KG no queijo multiplica por dois pois sao duas fatias de queijo//
    var qntsanduba = prompt("Quantos hamburguers serão pedidos?")
    qntsanduba = parseInt(qntsanduba)
    var queijo = (2 * 50 * qntsanduba) / 1000;
    var presunto = (50 * qntsanduba) / 1000;
    var hamburguer = (100 * qntsanduba) / 1000;

    alert("Para " + qntsanduba + " sanduíches, você precisará de:\n" +
        queijo + " kg de queijo\n" +
        presunto + " kg de presunto\n" +
        hamburguer + " kg de carne");

}

function fahrenheit() {

    var temperatura = prompt("Qual a temperatura?")
    var fahrenheit = (temperatura * 1.8) + 32

    alert("A temperatura convertida é " + fahrenheit + "°F")

}

function Hipotheticus() {

    var tempodetrabalho = prompt("Quantas horas voce trabalhou?");
    tempodetrabalho = parseFloat(tempodetrabalho)
    var quantashorasextras = prompt("Quantas horas extras trabalhou?");
    quantashorasextras + parseFloat(quantashorasextras);
    var bruto = (tempodetrabalho * 10) + (quantashorasextras * 15);
    var liquido = bruto * 0.90;
    var mensalL = bruto * 0
    var mensalB = bruto;

    alert("   Folha Salarial   \nSalário Bruto: R$ " + bruto.toFixed(2) + "\n" +
        "Salário Líquido: R$ " + liquido.toFixed(2));

}

function pontos() {

    var Ppontos = prompt("Quantos pontos tem o primeiro colocado?")
    var Spontos = prompt("Quantos pontos tem o seu time?")
    var distância = (Ppontos - Spontos) / 3

    alert("Seu time tera que vencer " + distância + " partidas")

}

function Eassasino() {

    var contador = 0;
    var opcao = prompt = ("Esteve no local do crime? \n1 - sim \n2 - não")
    if (opcao == 1) (
        contador++
    )

    opcao = prompt("Esteve no local do crime? \n1 - sim \n2 - não")
    if (opcao == 1) (
        contador++
    )

    opcao = prompt("Ja trabalhou com a vitima? \n1 - sim \n2 - não")
    if (opcao == 1) (
        contador++
       ) 
        function Eassasino(){
    }

    if (contador < 2) {
        alert("Voce é inocente! ")
    } else if (contador == 2) {
        alert("Voce é suspeito ")
    } else if (contador >= 3 && contador <= 4) {
        alert("Voce é cumplice")
    } else {
        alert("Voce é o assasino")
    }
}

function Estoquemedio() {

var quantidademaxima = parseInt(prompt("Qual é a quantidade maxima de peças no estoque?"))
var quantidademinima = parseInt(prompt("Qual é a quantidade minima de peças no estoque?"))
var atual = parseFloat(prompt=("qual a quantidade atual de peças?"))
var media=(quantidademaxima+quantidademinima) / 2

if(atual<quantidademinima)
    alert("O estoque esta abaixo do minimo")
 else if (atual>quantidademaxima)
    alert("O estoque esta acima do maximo")
 else if (atual<quantidademaxima, atual>quantidademinima)

alert("O estoque esta dentro da media")


}

function mostrarsexo(){ 



}

function turno(){ 

var sexo=prompt("Qual o seu sexo?")

}
