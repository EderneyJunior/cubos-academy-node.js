const express = require('express')
const { cadastrarUsuario, login } = require('./controladores/usuarios')

const rotas = express()

rotas.post('/usuarios', cadastrarUsuario)
rotas.post('/login', login)

module.exports = rotas