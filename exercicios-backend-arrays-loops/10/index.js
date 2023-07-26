const numeros = [-8, 12, 4, 2]
let maior = numeros[0], menor = numeros[0]

for (let i of numeros) {
    if (i > maior) {
        maior = i
    } else if (i < menor) {
        menor = i
    }
}

console.log(maior - menor)