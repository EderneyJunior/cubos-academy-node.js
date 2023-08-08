const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44, 55, 62]

const pares = numeros.filter((numero) => {
    return numero % 2 == 0
})

console.log(pares)