function acharCarro(carros, pos) {
    if (pos + 2 < carros.length) {
        const fatiaCarros = carros.slice(pos, pos + 3)
        const carrosFormatado = fatiaCarros.join(' - ')
        return carrosFormatado
    } else {
        const fatiaCarros = carros.slice(pos)
        const carrosFormatado = fatiaCarros.join(' - ')
        return carrosFormatado
    }
}

const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia']
const posicao = 0

console.log(acharCarro(nomes, posicao))