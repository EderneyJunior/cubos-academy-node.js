const original = [1, 3, 12, 21, 54, 88, 112];
const pares = []

for (let i of original) {
    if (i % 2 == 0) {
        pares.push(i)
    }
}

console.log(pares)