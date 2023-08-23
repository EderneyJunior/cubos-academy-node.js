const numeros = [2, 4, 7, 8, 1, 6, 5, 10];
let soma = 0

for (let i of numeros) {
    if (i % 2 == 0) {
        soma += i
    }
}

console.log(soma)