const express = require('express')

const controladorProduto = require('./controladores/controladorProduto')

const rotas = express()

rotas.get('/produtos', controladorProduto.listarProdutos)
rotas.get('/produtos/:id', controladorProduto.obterProduto)
rotas.get('/produtos/:id/frete/:cep', controladorProduto.freteProduto)

module.exports = rotas