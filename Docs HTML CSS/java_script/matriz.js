let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matriz.length; i++) {

    for (let j = 0; j < matriz[i].length; j++) {

        console.log(`Elemento [${i}][${j}] = ${matriz[i][j]}`);
}
}

//somar os elementos da matriz

let mat = [
    [1, 2],
    [3, 4],
    [5, 6]   
];

let total = 0;

for (let i = 0; i < mat.length; i++) {

    for (let j = 0; j < mat[i].length; j++) {

        total += mat[i][j];       
}
}

 console.log("Soma da matriz", total);
 
 //////////////////////////////////////////
//Calcular a média dos valores da matriz
let notas = [
  [8, 7, 6],
  [9, 5, 10]
];

soma = 0;
let qtd = 0;

for (let i = 0; i < notas.length; i++) {
  for (let j = 0; j < notas[i].length; j++) {
    soma += notas[i][j];
    qtd++;
  }
}

let media = soma / qtd;
console.log("Média geral:", media.toFixed(2));

///////////////////////////////////////
//Transpor uma matriz (trocar linhas por colunas)
let original = [
  [1, 2],
  [3, 4],
  [5, 6]
];

let transposta = [];

for (let i = 0; i < original[0].length; i++) {
  transposta[i] = [];
  for (let j = 0; j < original.length; j++) {
    transposta[i][j] = original[j][i]; // Troca linha por coluna
  }
}

console.log("Matriz transposta:", transposta);

////////////////////////////////
//Somar duas matrizes 2x2
let a = [
  [1, 2],
  [3, 4]
];

let b = [
  [5, 6],
  [7, 8]
];

var soma = [];

for (let i = 0; i < a.length; i++) {
  soma[i] = [];
  for (let j = 0; j < a[i].length; j++) {
    soma[i][j] = a[i][j] + b[i][j];
  }
}

console.log("Matriz soma:", soma);
