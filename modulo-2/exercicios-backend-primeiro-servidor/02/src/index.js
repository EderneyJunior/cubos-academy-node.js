const express = require('express')
const app = express()
const tempo = require('./tempo')
const intervalo = 1000
let min = tempo.min
let seg = tempo.seg
let pause = tempo.pausar

const cronometro = () => {
    if (!pause) {
        if (min > 59) {
            min = 0
        }

        if (seg > 59) {
            seg = 0
            min++
        }
        seg++
    } else {
        clearInterval()
    }
}

app.get('/', (req, res) => {
    let minFormatado = ''
    let segFormatado = ''

    if (min < 10) {
        minFormatado += '0' + min
    } else {
        minFormatado += min
    }

    if (seg < 10) {
        segFormatado += '0' + seg 
    } else {
        segFormatado += seg
    }

    res.send(`Tempo atual do cronometro: ${minFormatado} minutos e ${segFormatado} segundos`)
})

app.get('/iniciar', (req, res) => {
    res.send('Cronometro iniciado!')
    pause = false
    setInterval(cronometro, intervalo)
})

app.get('/pausar', (req, res) => {
    pause = true
    res.send('Cronometro pausado!')
})

app.get('/continuar', (req, res) => {
    res.send('Cronometro continuando!')
    pause = false
    setInterval(cronometro, intervalo)
})

app.get('/zerar', (req, res) => {
    res.send('Cronometro zerado')
    min = 0
    seg = 0
})

app.listen(8000, () => {console.log('Servidor rodando')})