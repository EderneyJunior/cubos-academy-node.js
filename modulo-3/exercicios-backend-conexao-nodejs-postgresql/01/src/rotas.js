const express = require('express')
const controlBiblioteca = require('./controladores/biblioteca')

const rotas = express()

rotas.post('/autor', controlBiblioteca.cadastrarAutor)
rotas.get('/autor/:id', controlBiblioteca.buscaAutor)
rotas.post('/autor/:id/livro', controlBiblioteca.cadastrarLivro)
rotas.get('/livro', controlBiblioteca.listarLivro)

module.exports = rotas