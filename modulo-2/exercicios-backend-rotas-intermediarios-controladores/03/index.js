const express = require('express')
const app = express()

const { get, getPorId } = require('./roteador')

app.get('/imoveis', get)

app.get('/imoveis/:id', getPorId)

app.listen(8000)