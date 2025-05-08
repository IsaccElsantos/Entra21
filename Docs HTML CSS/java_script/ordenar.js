//Ordena a lista de numeros em ordem crescente
numeros = [42, 10, 7, 99, 18];
//funçao sort()com comparaçao numerica
numeros.sort(function (a, b) {
    return a - b; //para ordenar em ordem crescente
});
console.log("Lista ordenada", numeros);