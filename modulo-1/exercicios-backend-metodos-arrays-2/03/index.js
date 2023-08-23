const palavras = ["arroz", "feijão", "carne", "refri", "macarrão"]

const resultado = palavras.some((el) => {
    return el == 'cerveja' || el == 'vodka'
})

resultado ? console.log(`revise sua lista, joão. possui bebida com venda proibida!`) : console.log(`tudo certo, vamos as compras!`)