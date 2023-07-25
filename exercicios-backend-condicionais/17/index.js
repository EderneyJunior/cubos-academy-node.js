//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

let valorParcela = (valorDoProduto * 0.01) / quantidadeDoParcelamento
let c = valorParcela
let parcelas = 0

while(c <= valorPago) {
    c += valorParcela
    parcelas += 1
}

console.log(`Restam ${quantidadeDoParcelamento - parcelas} parcelas de R$${valorParcela}`)