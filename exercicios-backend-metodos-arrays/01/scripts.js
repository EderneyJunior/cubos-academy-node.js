const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva']
frutas.reverse()
let stringFrutas =  frutas.join()
console.log(stringFrutas)

frutas.reverse()
frutas.splice(0, 1)
frutas.splice(frutas.length - 1, 1, 'melão')
console.log(frutas)