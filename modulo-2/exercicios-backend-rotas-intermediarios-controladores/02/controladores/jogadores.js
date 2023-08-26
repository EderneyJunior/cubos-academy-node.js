const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"]

let indiceGlobal = 0

const jogador = (req, res) => {
    if (indiceGlobal >= jogadores.length) {
        indiceGlobal = 0
    }

    res.send(`É a vez de ${jogadores[indiceGlobal]} jogar`)
    indiceGlobal++
}

const remover = (req, res) => {
    const { indice } = req.query

    if (indice > jogadores.length) {
        res.send(`Não existe jogador no índice informado (${indice}) para ser removido.`)
    } else {
        jogadores.splice(indice, 1)
    }

    res.send(jogadores)
}

const adicionar = (req, res) => {
    let { nome, indice } = req.query

    let primeiraLetra = nome[0]
    primeiraLetra = primeiraLetra.toUpperCase()

    let resto = nome.slice(1)
    resto = resto.toLowerCase()

    nome = primeiraLetra + resto

    if (indice) {
        if (indice < jogadores.length) {
            jogadores.splice(indice, 0, nome)
        } else {
            res.send(`O índice informado (${indice}) não existe no array. Novo jogador não foi adicionado.`)
        }
    } else {
        jogadores.push(nome)
    }

    res.send(jogadores)
}

module.exports = {
    jogador,
    remover,
    adicionar
}