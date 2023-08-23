//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

const valorParcela = (valorDoProduto / 100) / quantidadeDoParcelamento
const parcelasApagar = quantidadeDoParcelamento - (valorPago/valorParcela)

console.log(`Restam ${parcelasApagar} parcelas de R$${valorParcela}`)