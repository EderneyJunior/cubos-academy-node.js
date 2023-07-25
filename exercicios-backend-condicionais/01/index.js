const jogada1 = "tesoura"
const jogada2 = "papel"

//seu código aqui

if (jogada1 == 'pedra' && jogada2 == 'tesoura'){
    console.log('pedra')
} else if (jogada1 == 'pedra' && jogada2 == 'papel'){
    console.log('papel')
} else if (jogada1 == 'tesoura' && jogada2 == 'papel'){
    console.log('tesoura')
} else if (jogada1 == 'papel' && jogada2 == 'tesoura'){
    console.log('tesoura')
} else if (jogada1 == 'papel' && jogada2 == 'pedra'){
    console.log('papel')
} else if (jogada1 == 'tesoura' && jogada2 == 'pedra'){
        console.log('pedra')
} else if (jogada1 == jogada2) {
    console.log('empate')
}