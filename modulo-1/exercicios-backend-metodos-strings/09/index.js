const nome = 'Ederney Junior';

function nickName(nome) {
    let array = nome.trim().split(' ')
    let nick = ''
    let nickCorreto = '@'
    for (let item of array) {
        nick += item
    }
    nick = nick.toLowerCase()

    for (let letra of nick) {
        nickCorreto += nickCorreto.length < 13 ? letra : ''
    }

    return nickCorreto
}

console.log(nickName(nome))