const { bd } = require('../bancodedados')

module.exports = {
    cadastroUsuario: async (req, res) => {
        const { nome, email } = req.body

        if (!nome || !email) {
            return res.status(400).json({ menssagem: 'Nome e email são obrigatórios' })
        }

        try {
            const temEmail = bd.find((usuario) => usuario.email === email)

            if (temEmail) {
                return res.status(400).json({ menssagem: 'Email ja cadastrado' })
            }

            const novoUsuario = {
                nome,
                email
            }

            bd.push(novoUsuario)

            return res.status(201).json(novoUsuario)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ menssagem: 'Erro interno no servidor ' })
        }
    }
}