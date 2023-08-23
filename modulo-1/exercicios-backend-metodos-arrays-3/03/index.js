const numeros = [1, 98, -76, 0, 12, 190, 5, 60, 44, 55, 200]

const maiorNumero = numeros.reduce((acumulador, elementoAtual, indice, array) => {
    let maior = acumulador

    if (elementoAtual > maior) {
        maior = elementoAtual
    }
    
    return maior
})

console.log(maiorNumero)