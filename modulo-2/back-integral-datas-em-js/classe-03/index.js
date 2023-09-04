const taAberto = (entrada) => {
    const hora = entrada.getHours()
    const min = entrada.getMinutes()

    if (hora >= 8 && hora <= 18) {
        if (min > 0) {
            return false    
        }

        return true
    }

    return false
}

const aberto = taAberto(new Date(2020, 3, 30, 7, 59))

console.log(aberto)