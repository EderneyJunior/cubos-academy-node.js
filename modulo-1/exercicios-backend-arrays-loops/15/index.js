const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

/*
for (let i = 0; i < original.length; i++) {
    if (original[i] % 2 == 0) {
        pares.push(original[i])
    } else {
        impares.push(original[i])
    }
}

console.log(pares)
console.log(impares)
*/

/*
for (let i of original) {
    if (i % 2 == 0) {
        pares.push(i)
    } else {
        impares.push(i)
    }
}

console.log(pares)
console.log(impares)
*/

let i = 0

while (i < original.length) {
    if (original[i] % 2 == 0) {
        pares.push(original[i])
    } else {
        impares.push(original[i])
    }
    
    i++
}

console.log(pares)
console.log(impares)