const produtos = require('../bancodedados/produtos')
const { getStateFromZipcode } = require('utils-playground')

const listarProdutos = (req, res) => {
    return res.status(200).json(produtos)
}

const obterProduto = (req, res) => {
    const { id } = req.params

    const produto = produtos.find(produto => {
        return produto.id == id
    })

    if (!produto) {
        return res.status(404).json({menssagem: 'Nao foi possivel encontar o produto com ID informado.'})
    }

    return res.status(200).json(produto)
}

const freteProduto = async (req, res) => {
    const { id, cep } = req.params

    const produto = produtos.find(produto => {
        return produto.id == id
    })

    if (!produto) {
        return res.status(404).json({menssagem: 'Nao foi possivel encontar o produto com ID informado.'})
    }

    try {
        const estado = await getStateFromZipcode(cep)

        if (!estado) {
            return res.status(400).json({menssagem: 'Não foi possivel encontrar um estado com o CEP informado'})
        }

        let frete = produto.valor * 0.12

        if (estado == 'BA' || estado == 'SE' || estado == 'AL' || estado == 'PE' || estado == 'PB') {
            frete = produto.valor * 0.1
        }

        if (estado == 'SP' || estado == 'RJ') {
            frete = produto.valor * 0.15
        }

        const informacaoProduto = {
            produto,
            estado,
            frete
        }

        return res.status(200).json(informacaoProduto)
    } catch (erro) {
        return res.status(400).json({menssagem: 'Erro no servidor.'})
    }
    
}

module.exports = {
    listarProdutos,
    obterProduto,
    freteProduto
}