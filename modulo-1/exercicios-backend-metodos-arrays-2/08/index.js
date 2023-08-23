const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"]

const frutasModificado = frutas.map((fruta, indice) => {
    fruta = fruta.toLowerCase()
    fruta = fruta.replace(fruta[0], fruta[0].toUpperCase())
    fruta = fruta.padStart(fruta.length + 4, `${indice} - `)
    return fruta
})

console.log(frutasModificado)