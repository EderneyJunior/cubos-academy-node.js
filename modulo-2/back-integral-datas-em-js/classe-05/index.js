const taAberto = (entrada) => {
    const hora = entrada.getHours()
    const min = entrada.getMinutes()
    const diaSemana = entrada.getDay()

    if (hora >= 8 && hora <= 18) {
        if (min > 0 && hora >= 18) {
            return false
        }

        if (diaSemana >= 1 && diaSemana <= 6) {
            if (diaSemana === 6 && hora >= 8 && hora <= 12) {
                if (min > 0 && hora >= 12) {
                    return false
                }
            }

            return true
        }
    }

    return false
}

const aberto = taAberto(new Date(2021,3,24,12,30))

console.log(aberto)