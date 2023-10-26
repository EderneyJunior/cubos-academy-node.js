const { bd } = require('../bancodedados')
const { transportador } = require('../email')
const { compiladorHTML } = require('../utils/compiladorHTML')

module.exports = {
    envioEmailNewsletter: async (req, res) => {
        const { texto } = req.body

        if (!texto) {
            return res.status(400).json({ menssagem: 'O email deve conter um texto' })
        }

        try {
            const arquivo = './01/src/templates/template.html'

            for (const usuario of bd) {
                const contexto = {
                    nomeUsuario: usuario.nome,
                    texto
                }

                const html = await compiladorHTML(arquivo, contexto)

                transportador.sendMail({
                    from: `${process.env.EMAIL_NAME} <${process.env.EMAIL_FROM}>`,
                    to: `${usuario.nome} <${usuario.email}>`,
                    subject: 'Email importante',
                    html
                })
            }

            return res.json({ menssagem: 'Emails enviados com sucesso' })
        } catch (error) {
            return res.status(500).json({ menssage: 'Erro interno no servidor' })
        }
    }
}