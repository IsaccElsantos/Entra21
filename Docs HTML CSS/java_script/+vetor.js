//somar valores do vetor
let numeros = [1, 8, 9, 10]
let menor = 10000
let maior = -1
let soma = 0
for (let i = 0; i < numeros.length; i++) {

    soma = soma + numeros[i]
    if (maior < numeros[i]) {
        maior = numeros[i]
    }
    if (menor > numeros[i]) {
        menor = numeros[i]
    }

}
console.log(soma)
console.log(maior)
console.log(menor)











