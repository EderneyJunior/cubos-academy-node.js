const letras = ["A", "a", "B", "C", "E", "e"];
//const letras = ["A", "a", "B", "C", "L", "z"];
let quantidade = 0
for (let i of letras) {
    if (i == 'E' || i == 'e') {
        quantidade++
    }
}

if (quantidade == 0) {
    console.log(`Nenhuma letra "E" ou "e" foi encontrada.`)
} else {
    console.log(`Foram encontradas ${quantidade} letras "E" ou "e".`)
}