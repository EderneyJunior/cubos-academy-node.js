const palavras = ["livro", "caneta", "sol", "carro", "orelha"]

const resultado = palavras.some((el) => {
    return el.length > 5
})

resultado ? console.log(`existe palavra inválida`) : console.log(`array validado`)