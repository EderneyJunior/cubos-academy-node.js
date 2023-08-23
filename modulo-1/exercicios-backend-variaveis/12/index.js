let taxa = 0, montante = 90000, capitalInicial = 60000, meses = 24

taxa = ((montante / capitalInicial)**(1 / meses) - 1) * 100

console.log(`O seu financiamento de R$${capitalInicial} reais teve uma taxa de juros de ${taxa.toFixed(2)}%, pois após ${meses} meses você teve que pagar R$${montante} reais.`)