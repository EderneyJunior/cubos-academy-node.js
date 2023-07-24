let capital = 1000
let taxaFixa = 12.5
let tempo = 5

taxaFixa = taxaFixa / 100

const montante = capital * (1 + taxaFixa)**tempo

console.log(`O montante recebido no tempo de ${tempo} meses é R$${montante.toFixed(1)}`)