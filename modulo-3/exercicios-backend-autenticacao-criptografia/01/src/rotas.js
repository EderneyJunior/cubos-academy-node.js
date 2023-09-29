const express = require('express')
const { cadastrarUsuario, login } = require('./controladores/usuarios')
const { cadastrarPokemon } = require('./controladores/pokemons')
const verificarUsuario = require('./intermediarios/autenticacao')

const rotas = express()

rotas.post('/usuario', cadastrarUsuario)
rotas.post('/login', login)

rotas.use(verificarUsuario)
rotas.post('/pokemon', cadastrarPokemon)

module.exports = rotas