const express = require('express')
const { buscarEndereco } = require('utils-playground')
const fs = require('fs/promises')

const app = express()

app.use(express.json())

app.get('/enderecos/:cep', async (req, res) => {
    const { cep } = req.params

    if (isNaN(Number(cep))) {
        return res.status(400).json({menssagem: 'Digite um cep válido'})
    }

    try {
        const buscaEndereco = await buscarEndereco(cep)

        const endereco = await fs.readFile('./03/src/enderecos.json')

        const enderecoJson = JSON.parse(endereco)

        const existeEndereco = enderecoJson.find((endereco) => {
            return endereco.cep == buscaEndereco.cep
        })
        
        if(existeEndereco) {
            return res.status(200).json(existeEndereco)
        }

        enderecoJson.push(buscaEndereco)

        const enderecoTexto = JSON.stringify(enderecoJson)

        await fs.writeFile('./03/src/enderecos.json', enderecoTexto)

        return res.status(200).json(buscaEndereco)

    } catch (erro) {
        return res.status(400).json({menssagem: `Deu erro: ${erro.message}`})
    }
})

app.listen(3000, () => console.log('Servidor Rodando'))