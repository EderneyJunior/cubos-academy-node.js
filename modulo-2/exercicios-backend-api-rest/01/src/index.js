const express = require('express')

const senha = require('./intermediarios')
const rotas = require('./roteadores')

const app = express()

app.use(express.json())

app.use(senha)

app.use(rotas)

app.listen(3000, () => console.log('Servidor Rodando'))