const express = require('express')
const app = express()

const { jogador, remover, adicionar } = require('./controladores/jogadores')

app.get('/', jogador)

app.get('/remover', remover)

app.get('/adicionar', adicionar)

app.listen(8000, () => console.log('Servidor rodando'))