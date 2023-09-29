const pool = require('../conexao')
const jwt = require('jsonwebtoken')
const senhajwt = require('../senhajwt')

const verificarUsuario = async (req, res, next) => {
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({menssagem: 'Não autorizado'})
    }

    const token = authorization.split(' ')[1]

    try {
        const { id } = jwt.verify(token, senhajwt)

        const { rows, rowCount} = await pool.query('select * from usuarios where id = $1', [id])

        if (rowCount < 1) {
            return res.status(401).json({menssagem: 'Não autorizado'})
        }

        req.usuario = rows[0]

        next()
    } catch (erro) {
        return res.status(401).json({menssagem: 'Não autorizado'})
    }
}

module.exports = verificarUsuario