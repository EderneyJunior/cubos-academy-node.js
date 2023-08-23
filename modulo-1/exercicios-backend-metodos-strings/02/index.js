const cpf = "12345678900";
//const cnpj = "12345678900";
const cnpj = "12345678000199"

function formatarCPF(num) {
    if (num.length == 11) {
        const part1 = num.slice(0, 3), part2 = num.slice(3, 6), part3 = num.slice(6, 9), part4 = num.slice(-2)
        return `${part1}.${part2}.${part3}-${part4}`
    } else {
        return `CPF inválido!`
    }
}

function formatarCNPJ(cnpj) {
    if (cnpj.length == 14) {
        const part1 = cnpj.slice(0,2), part2 = cnpj.slice(2, 5), part3 = cnpj.slice(5, 8), part4 = cnpj.slice(8, 12), part5 = cnpj.slice(-2)
        return `${part1}.${part2}.${part3}/${part4}-${part5}`
    } else {
        return `CNPJ inválido!`
    }
}
console.log(formatarCPF(cpf))
console.log(formatarCNPJ(cnpj))