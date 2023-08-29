const funcaoSenha = (req, res, next) => {
    const { senha } = req.query
    const senhaDoServidor = 'cubos123'

    if (senha != senhaDoServidor) {
        return res.status(401).json({menssagem: 'A senha digitada está incorreta!, por favor digite a senha correta'})
    }

    res.status(204)
    next()
}

module.exports = funcaoSenha