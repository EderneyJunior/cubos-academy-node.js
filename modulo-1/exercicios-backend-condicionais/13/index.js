//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

/*
| Forma de Pagamento | Desconto |
| ------------------ | -------- |
| credito            | 5%       |
| cheque             | 3%       |
| debito ou dinheiro | 10%      |
*/

let valorFinal = 0

if (tipoDePagamento == 'credito') {
   valorFinal = (valorDoProduto - valorDoProduto * 0.05) * 0.01
console.log(`Valor a ser pago: ${valorFinal.toFixed(2)}`)
}