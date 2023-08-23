let valorTotal = 110
let meuDinheiro = 50
let valorDesconto = valorTotal - meuDinheiro

const d = (valorDesconto * 100) / valorTotal

console.log(`${valorDesconto} representa ${d.toFixed(1)}% de desconto.`)