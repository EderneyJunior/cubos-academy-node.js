const imoveis = require('./dados/imoveis')

const get = (req, res) => {
    res.send(imoveis)
}

const getPorId = (req, res) => {
    const id = req.params.id

    const imovelId = imoveis.find((imovel) => {
        return imovel.id == id
    })

    res.send(imovelId)
}

module.exports = {
    get,
    getPorId
}