let bancoDeDados = require('../bancodedados')

const listaConvidados = (req, res) => {
    return res.status(200).json(bancoDeDados)
}

const obterConvidado = (req, res) => {
    const { nome } = req.query

    if (!nome) {
        return listaConvidados(req, res)
    }

    const convidado = bancoDeDados.some((convidado) => {
        return convidado.toLowerCase() === nome.toLowerCase()
    })

    if (!convidado) {
        return res.status(404).json({menssagem: 'O convidado buscado não está presente na lista.'})
    }

    return res.status(200).json({menssagem: 'Convidado presente.'})
}

const adicionarConvidado = (req, res) => {
    let { nome } = req.body

    const nomeConvidado = bancoDeDados.some((convidado) => {
        return convidado.toLowerCase() == nome.toLowerCase()
    })

    if (nomeConvidado) {
        return res.status(200).json({manssagem: 'O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também.'})
    }

    const primeiraLetra = nome[0]
    const resto = nome.slice(1)

    nome = primeiraLetra.toUpperCase() + resto.toLowerCase()

    bancoDeDados.push(nome)

    return res.status(201).json({menssagem: 'Convidado adicionado.'})

}

const removerConvidado = (req, res) => {
    const { nome } = req.params

    const convidado = bancoDeDados.find((convidado) => {
        return convidado.toLowerCase() == nome.toLowerCase()
    })

    if (!convidado) {
        return res.status(404).json({manssagem: 'O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido.'})
    }

    bancoDeDados = bancoDeDados.filter((convidado) => {
        return convidado.toLowerCase() != nome.toLowerCase()
    })

    return res.status(200).json({menssagem: 'Convidado removido.'})
}

module.exports = {
    listaConvidados,
    obterConvidado,
    adicionarConvidado,
    removerConvidado
}