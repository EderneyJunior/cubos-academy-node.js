const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function clinica(array, operacao, nome = '') {
    if (operacao == 'agendar') {
        array.push(nome)
    } else if (operacao == 'atender') {
        array.shift()
    }
    const novaLista = array.join()
    console.log(novaLista)
    console.log('-=-=-=-=-=-=-=-=--=--=-=-=-=-=-===--=-=')
}

clinica(pacientes, 'agendar', 'Ederney')
clinica(pacientes, 'atender')