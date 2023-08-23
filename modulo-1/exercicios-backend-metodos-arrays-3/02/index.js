const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
    "Rio Grande do Sul"
]

const maiorTamanho = cidades.reduce((acumulador, elementoAtual) => {
    let maior = acumulador

    if (elementoAtual.length > maior.length) {
        maior = elementoAtual
    }
    
    return maior
})

console.log(maiorTamanho)