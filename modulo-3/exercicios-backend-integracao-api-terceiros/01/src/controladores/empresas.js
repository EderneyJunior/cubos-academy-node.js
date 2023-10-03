const instanciaAxios = require('./api.js')
const fs = require('fs/promises')

const detalharEmpresa = async (req, res) => {
    const { dominioEmpresa } = req.query

    try {
        const { data: empresa} = await instanciaAxios.get(`/?domain=${dominioEmpresa}`)

        if (empresa && empresa.name) {
            const dadosEmpresas = JSON.parse(await fs.readFile('./src/dados/empresa.json'))
            dadosEmpresas.push(empresa)


            await fs.writeFile('./src/dados/empresa.json', JSON.stringify(dadosEmpresas, null, 2))
        }

        return res.json(empresa)
    } catch (erro) {
        return res.status(500).json({mensagem: erro.message})
    }
}

module.exports = {
    detalharEmpresa
}