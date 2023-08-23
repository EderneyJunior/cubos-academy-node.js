const numeros = [3, 24, 1, 8, 11, 7, 15];
let maior = numeros[0]

for (let i of numeros) {
    if (i > maior) {
        maior = i
    }
}

console.log(maior)