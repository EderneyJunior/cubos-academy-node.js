const pool = require('../conexao')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const senhajwt = require('../senhajwt')

const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body

    if (!nome) {
        return res.status(400).json({mensagem: 'O nome é obrigatório'})
    }

    
    if (!email) {
        return res.status(400).json({mensagem: 'O email é obrigatório'})
    }

    
    if (!senha) {
        return res.status(400).json({mensagem: 'A senha é obrigatória'})
    }

    try {
        const senhaCriptografada = await bcrypt.hash(senha, 10)

        const novoUsuario = await pool.query('insert into usuarios (nome, email, senha) values ($1, $2, $3) returning *', [nome, email, senhaCriptografada])

        return res.status(201).json(novoUsuario.rows[0])
    } catch (erro) {
        return res.status(500).json({mensagem: erro.message})
    }
}

const login = async (req, res) => {
    const { email, senha} = req.body

    if (!email) {
        return res.status(400).json({mensagem: 'O email e senha é obrigatório'})
    }

    
    if (!senha) {
        return res.status(400).json({mensagem: 'O email e senha é obrigatório'})
    }

    try {
        const usuario = await pool.query('select * from usuarios where email = $1', [email])

        if (usuario.rowCount < 1) {
            return res.status(404).json('Email ou senha invalidos')
        }

        const senhaValida = await bcrypt.compare(senha, usuario.rows[0].senha)

        if (!senhaValida) {
            return res.status(404).json('Email ou senha invalidos')
        }

        const token = jwt.sign({id: usuario.rows[0].id}, senhajwt, {expiresIn: '12h'})

        const { senha: _, ...usuarioLogado} = usuario.rows[0]

        return res.json({usuario: usuarioLogado, token})
    } catch {
        return res.status(500).json({mensagem: erro.message})
    }
}

module.exports = {
    cadastrarUsuario,
    login
}