const ladoA = 6;
const ladoB = 6;

/*
| Bucha de | Nome   |
| -------- | ------ |
| 0        | Branco |
| 1        | Ás     |
| 2        | Duque  |
| 3        | Terno  |
| 4        | Quadra |
| 5        | Quina  |
| 6        | Sena   |
*/

if(ladoA == ladoB && ladoA == 0) {
    console.log('Bucha de branco')
} else if(ladoA == ladoB && ladoA == 1) {
    console.log('Bucha de ás')
} else if(ladoA == ladoB && ladoA == 2) {
    console.log('Bucha de duque')
} else if(ladoA == ladoB && ladoA == 3) {
    console.log('Bucha de terno')
} else if(ladoA == ladoB && ladoA == 4) {
    console.log('Bucha de quadra')
} else if(ladoA == ladoB && ladoA == 5) {
    console.log('Bucha de quina')
} else if(ladoA == ladoB && ladoA == 6) {
    console.log('Bucha de sena')
} else {
    console.log('Nao é bucha')
}