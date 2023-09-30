const express = require('express')
const { cadastrarUsuario, login } = require('./controladores/usuarios')
const {
        cadastrarPokemon,
        atualizarApelido,
        listarPokemons,
        detalharPokemon,
        deletarPokemon 
    } = require('./controladores/pokemons')
const verificarUsuario = require('./intermediarios/autenticacao')

const rotas = express()

rotas.post('/usuario', cadastrarUsuario)
rotas.post('/login', login)

rotas.use(verificarUsuario)
rotas.post('/pokemon', cadastrarPokemon)
rotas.patch('/pokemon/:id', atualizarApelido)
rotas.get('/pokemon', listarPokemons)
rotas.get('/pokemon/:id', detalharPokemon)
rotas.delete('/pokemon/:id', deletarPokemon)

module.exports = rotas