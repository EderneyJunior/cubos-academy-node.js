const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function (valor) {
        this.historicos.push({tipo: 'deposito', valor: valor})
        this.saldo += valor
        return `Deposito de R$ ${valor / 100} realizado para o cliente: ${this.nome}`
    },
    sacar: function (valor) {
        if (valor > this.saldo) {
            return `Saldo insuficiente para o saque de: ${this.nome}`
        } else {
            this.saldo -= valor
            this.historicos.push({tipo: 'saque', valor: valor})
            return `Saque de R$ ${valor / 100} realizado para o cliente: ${this.nome}`
        }
    },
    extrato: function() {
        console.log('-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-==-=-=-=-==-')
        let res = '';
        res += `Extrato de ${this.nome} - Saldo: R$ ${this.saldo / 100}
Histórico:`
        for (let item of this.historicos) {
            res += `
${item.tipo} de R$ ${item.valor / 100}`
        }
        return res
    }
}

console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.extrato());