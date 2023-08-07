function dividirGrupos(nomes, quantidade) {
    let c = 0
    for (let i = 0; i < nomes.length; i += quantidade) {
        if (i == 0) {
            const fatia = nomes.slice(c, quantidade)
            console.log(`Grupo ${c + 1}: ${fatia}`)
        } else {
            if (i + quantidade > nomes.length) {
                const fatia = nomes.slice(quantidade)
                console.log(`Grupo ${c + 1}: ${fatia}`)
            } else {
                const fatia = nomes.slice(i, quantidade + i)
                console.log(`Grupo ${c + 1}: ${fatia}`)
            }
        }
        c++
    }

}

const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego']
const tamanhoDoGrupo = 3

dividirGrupos(nomes, tamanhoDoGrupo)