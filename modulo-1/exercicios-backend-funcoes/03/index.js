const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function () {
        const itens = this.CalcularTotalDeItens()
        const precoApagar = this.CalcularTotalApagar()

        console.log(`Cliente: ${carrinho.nomeDoCliente}`)
        console.log()
        this.imprimirDetalhes()
        console.log()
        console.log(`Total de itens: ${itens} itens`)
        console.log(`Total a pagar: R$ ${(precoApagar - this.calcularDesconto()).toFixed(2)} com R$ ${this.calcularDesconto().toFixed(2)} de desconto.`)
        },
        addProduto: function (produto) {
            if (produto.id > this.produtos[this.produtos.length - 1].id) {
                this.produtos.push(produto)
            } else {
                for (let item of this.produtos) {
                    if (item.id == produto.id) {
                        item.qtd += produto.qtd
                    }
                }
            }
        },
        imprimirDetalhes: function () {
            for (let item of this.produtos) {
                console.log(`Item ${item.id} - ${item.nome} - ${item.qtd} und - R$ ${(item.precoUnit / 100).toFixed(2)}`)
            }
        },
        CalcularTotalDeItens: function () {
            let totalDeItens = 0
            for (let item of this.produtos) {
                totalDeItens += item.qtd
            }
            return totalDeItens
        },
        CalcularTotalApagar: function () {
            let precoApagar = 0
            for (let item of this.produtos) {
                precoApagar += item.precoUnit * item.qtd
            }
            return (precoApagar / 100)
        },
        calcularDesconto: function () {
            let menorPreco = this.produtos[0].precoUnit
            let pagar = this.CalcularTotalApagar()
            let desconto = 0
            let melhorDesconto = 0

            for (let item of this.produtos) {
                if (item.precoUnit < menorPreco) {
                    menorPreco = item.precoUnit
                }
            }

            menorPreco = menorPreco / 100
            desconto = pagar * 0.1

            if (pagar > 100 || this.CalcularTotalDeItens() > 4) {
                if (pagar > menorPreco && pagar > 100) {
                    melhorDesconto =  desconto
                }
                if (menorPreco > pagar && this.CalcularTotalDeItens > 4) {
                    melhorDesconto =  menorPreco
                }
            }
            return melhorDesconto
        }
}

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

carrinho.imprimirResumo()

carrinho.addProduto(novaBermuda)
carrinho.imprimirResumo()

console.log('-=-=-==-=-=-=-=-=-==-=-=-=-=-=-=-=-===-=-=-=-=-=-=-=-=')

carrinho.addProduto(novoTenis)
carrinho.imprimirResumo()