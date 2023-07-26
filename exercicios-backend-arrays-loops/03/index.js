const numeros = [54, 22, 14, 87, 10, 284];
//const numeros = [54, 22, 14, 87, 284];
let pos = 0

for (let i=0; i < numeros.length; i++) {
    if (numeros[i] == 10) {
        pos = i
        break
    } else {
        pos = -1
    }
}

if (pos == -1) {
    console.log(pos)
} else {
    console.log(pos)
}