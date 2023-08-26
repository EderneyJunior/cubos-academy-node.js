const somar = (req, res) => {
    let {num1, num2} = req.query
    num1 = Number(num1)
    num2 = Number(num2)

    let soma = num1+ num2
    soma = String(soma)

    res.send(soma)
}

const subtrair = (req, res) => {
    let {num1, num2} = req.query
    num1 = Number(num1)
    num2 = Number(num2)

    let subtrair = num1 - num2
    subtrair = String(subtrair)

    res.send(subtrair)
}

const multiplicar = (req, res) => {
    let {num1, num2} = req.query
    num1 = Number(num1)
    num2 = Number(num2)

    let multiplicar = num1 * num2
    multiplicar = String(multiplicar)

    res.send(multiplicar)
}

const dividir = (req, res) => {
    let {num1, num2} = req.query
    num1 = Number(num1)
    num2 = Number(num2)

    let dividir = num1 / num2
    dividir = String(dividir)

    res.send(dividir)
}

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
}