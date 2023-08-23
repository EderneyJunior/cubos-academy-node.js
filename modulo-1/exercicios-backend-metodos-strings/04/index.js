const pessoa = {
    identificador: "123000",
    nome: "José silva costa",
    email: "      jose@email.com  ",
    corrigirNome: function() {
        let nome = this.nome.split(' ')
        let nomeCerto = ''
        for(let item of nome) {
            nomeCerto += `${item.replace(item[0], item[0].toUpperCase())} `
        }
    }
}

function corrigirNome(nome) {
    pessoa.nome = nome.split(' ')
    let nomeCerto = ''
    for(let item of pessoa.nome) {
        nomeCerto += `${item.replace(item[0], item[0].toUpperCase())} `
    }

    return nomeCerto.trim()
}

let identificador = 0
let email = pessoa.email.trim()

if (pessoa.identificador.length < 6) {
    identificador = pessoa.identificador.padStart(6, '0')
} else {
    identificador = pessoa.identificador
}

console.log(identificador)
console.log(corrigirNome(pessoa.nome))
console.log(email)