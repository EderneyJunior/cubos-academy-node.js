const express = require('express');
const app = express();
const array = require('./lista')

app.get('/', (req, res) => {
    res.send(`É a vez de ${array[0]} jogar`)
    array.push(array[0])
    array.shift()
});

app.listen(3000)