require('dotenv').config()
const express = require('express');
const rotas = require('./rotas');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(rotas);

const porta = process.env.PORT ? process.env.PORT : 3000

app.listen(porta, () => console.log(`Servidor rodando na porta ${porta}`))