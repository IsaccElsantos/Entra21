let numeros = [10, 20, 30, 40, 50];

for (let i = 0; i < numeros.length; i++) {
    console.log(`Elemento na posição [${i}] é: ${numeros[i]}`);
}

//notas aluno
//solicite as 4 notas
let notas = [];
for (let i = 0; i < 4; i++) {
    let nota = parseFloat(prompt(`digite a nota ${i + 1}:`));
    notas.push(nota);
    console.log
}
let soma;
for (let i = 0; 1 < 4; i++) {

    console.log(`A nota  ${i + 1} foi: ${notas[i]} `)
    soma = soma + notas[i];
}

console.log(`A media foi: ${soma / 4}`);