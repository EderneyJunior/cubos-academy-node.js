const nota = 5;

/*
| Nota        | Conceito |
| ----------- | -------- |
| 9 a 10      | A        |
| 8 a 8,9     | B        |
| 6 a 7,9     | C        |
| 4 a 5,9     | D        |
| menos que 4 | E        |
*/

if (nota < 0 || nota > 10) {
    console.log('Nota inválida, por favor digite uma nota válida!')
} else {
    let conceito = ''

    if (nota < 4){
        conceito = 'E'
    } else if (nota < 6) {
        conceito = 'D'
    } else if (nota < 8){
        conceito = 'C'
    } else if (nota < 9){
        conceito = 'B'
    } else {
        conceito = 'A'
    }

    console.log(`O estudante obteve conceito ${conceito}`)
}