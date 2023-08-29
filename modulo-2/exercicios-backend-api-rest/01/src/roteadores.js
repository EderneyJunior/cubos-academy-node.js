const express = require('express')

const alunos = require('./controladores/alunos')

const rotas = express()

rotas.get('/alunos', alunos.listagemAlunos)
rotas.get('/alunos/:id', alunos.obterAluno)
rotas.post('/alunos', alunos.criarAluno)
rotas.delete('/alunos/:id', alunos.excluirAluno)

module.exports = rotas