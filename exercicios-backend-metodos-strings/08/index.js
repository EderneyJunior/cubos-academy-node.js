const cpf = "011.022.033-44";

function tirarPontuação(cpf) {
    let cpfSemPontuacao = ''
    for (i = 0; i < 3; i++) {
        cpfSemPontuacao = i == 0 ? cpf.replace('.', '') : cpfSemPontuacao.replace('.', '')
        cpfSemPontuacao = i == 2 ? cpfSemPontuacao.replace('-', '') : cpfSemPontuacao
    }
    return cpfSemPontuacao
}

console.log(tirarPontuação(cpf))