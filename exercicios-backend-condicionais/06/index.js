const alturaEmCm = 206;

//seu código aqui

/*
- Caso o jogador tenha menos de 180cm, o programa deve imprimir **REPROVADO**
- Caso tenha entre 180cm e 185cm, o programa deve imprimir **LÍBERO**
- Caso tenha entre 186cm e 195cm, o programa deve imprimir **PONTEIRO**
- Caso tenha entre 196cm e 205cm, o programa deve imprimir **OPOSTO**
- Caso tenha mais de 205cm, o programa deve imprimir **CENTRAL**
*/

if (alturaEmCm < 180) {
    console.log('REPROVADO')
} else if (alturaEmCm < 186) {
    console.log('LÉBERO')
} else if (alturaEmCm < 196) {
    console.log('PONTEIRO')
} else if (alturaEmCm < 206) {
    console.log('OPOSTO')
} else {
    console.log('CENTRAL')
}