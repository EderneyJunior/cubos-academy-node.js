const email = "aluno@cubos.academy";

if (email[0] == '.' || email[email.length - 1] == '.') {
    console.log('E-mail inválido')
} else if (email.indexOf('@') == -1) {
    console.log('E-mail inválido')
} else if (email.lastIndexOf('.') < email.indexOf('@')) {
    console.log('E-mail inválido')
} else {
    console.log('E-mail válido')
}