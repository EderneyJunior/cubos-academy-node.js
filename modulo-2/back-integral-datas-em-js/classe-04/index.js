const taAberto = (entrada) => {
    const hora = entrada.getHours()
    const min = entrada.getMinutes()
    const diaSemana = entrada.getDay()

    if (hora >= 8 && hora <= 18) {
        if (min > 0 && hora >= 18) {
            return false
        }

        if (diaSemana >= 1 && diaSemana <= 5) {
            return true
        }
    }

    return false
}

const aberto = taAberto(new Date(2021,3,25,18))

console.log(aberto)