const express = require('express')

const livros = require('./controladores/livros')

const rotas = express()

rotas.get('/livros', livros.listarLivros)
rotas.get('/livros/:id', livros.obterLivro)
rotas.post('/livros', livros.adicionarLivro)
rotas.put('/livros/:id', livros.substituirLivro)
rotas.patch('/livros/:id', livros.alterarParteDoLivro)
rotas.delete('/livros/:id', livros.excluirLivro)

module.exports = rotas