const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function agendarPaciente(lista, nome = '') {
    if(nome == '') {
        console.log('Digite o nome do paciente!')
    } else {
        lista.push(nome)
        console.log(lista.join())
    }
}

function atenderPaciente(lista) {
    if (lista.length == 0) {
        console.log('Não à ninguem para ser atendido!')
    } else {
        lista.shift()
        console.log(lista.join())
    }
}

function cancelarAtendimento(lista, nome = '') {
    if (nome == '') {
        console.log('Digite o nome do paciente que quer cancelar o atendimento!')
    } else {
        const posicao = lista.indexOf(nome)
        lista.splice(posicao, 1)
        console.log(lista.join())
    }
}

agendarPaciente(pacientes, 'ederney')
atenderPaciente(pacientes)
cancelarAtendimento(pacientes, 'ederney')