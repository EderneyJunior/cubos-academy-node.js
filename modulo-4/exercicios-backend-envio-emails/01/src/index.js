require('dotenv').config()
const express = require('express')
const { cadastroUsuario } = require('./controladores/usuario')
const { envioEmailNewsletter } = require('./controladores/email')

const app = express()

app.use(express.json())

app.post('/usuario', cadastroUsuario)
app.post('/email', envioEmailNewsletter)

app.listen(3000, () => console.log('Servidor rodando'))