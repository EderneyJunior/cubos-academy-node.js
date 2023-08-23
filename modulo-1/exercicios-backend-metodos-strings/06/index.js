const celular = 43999918888
let celFormatado = ''

function formatarCel(celular) {
    celular = String(celular)
    let celFormatado = ''
    if (celular.length == 10) {
        const ddd = celular.slice(0, 2)
        const nove = 9
        const primeirosNumeros = celular.slice(2, 6)
        const ultimosNumeros = celular.slice(6, 10)

        return `(${ddd}) ${nove} ${primeirosNumeros}-${ultimosNumeros}`
    } else if (celular.length == 11) {
        const ddd = celular.slice(0, 2)
        const nove = 9
        const primeirosNumeros = celular.slice(3, 7)
        const ultimosNumeros = celular.slice(7, 11)

        return `(${ddd}) ${nove} ${primeirosNumeros}-${ultimosNumeros}`
    } else if (celular.length == 9) {
        const nove = 9
        const primeirosNumeros = celular.slice(1, 5)
        const ultimosNumeros = celular.slice(5, 9)

        return `${nove} ${primeirosNumeros}-${ultimosNumeros}`
    } else if (celular.length == 8) {
        const nove = 9
        const primeirosNumeros = celular.slice(0, 4)
        const ultimosNumeros = celular.slice(4, 8)

        return `${nove} ${primeirosNumeros}-${ultimosNumeros}`
    }
}

console.log(formatarCel(celular))