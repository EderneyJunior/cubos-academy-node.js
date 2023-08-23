const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
    'Cornélio'
]

const filtroCidades = cidades.filter((cidade) => {
    return cidade.length <= 8
})

console.log(filtroCidades)